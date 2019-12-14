/**
 * Created by user on 2019/12/14.
 */
import LocalOut, { EnumLocalOutEvent } from '../index';
import { async as spawn } from 'cross-spawn-extra';
import Bluebird from 'bluebird';
import { AbstractProvider, IProviderConnectData } from '../AbstractProvider';

export class BaseProvider extends AbstractProvider
{
	static desc = `localhost.run and serveo provider`;

	protected _cache: {
		SERVICES: string[];
		SERVICES_CONTAINS: string[];
		ID_SERVICES: number;
	};

	protected _constructor()
	{
		super._constructor();

		this._cache = {
			SERVICES: ["ssh.localhost.run", "serveo.net"],
			SERVICES_CONTAINS: ["Connect to", "Forwarding HTTP traffic from"],
			ID_SERVICES: 0,
		}
	}

	connect()
	{
		const { context } = this;
		if (context.port == null)
		{
			throw new TypeError("port is undefined");
		}

		let ID_SERVICES = this._cache.ID_SERVICES;

		let fn = (e: Error): Bluebird<IProviderConnectData> =>
		{
			context.debug && context._debugConsole.debug(`[connect]`, e.message.replace(/\s+$/g, ''));

			if (this._provider(++ID_SERVICES))
			{
				return this._exec(ID_SERVICES)
					// @ts-ignore
					.then(fn)
					;
			}
			else if (e.message.includes('timeout'))
			{
				e = new Error("All of the services to forwards PORT is off.")
			}

			return Bluebird.reject(e);
		};

		return this._exec(ID_SERVICES)
			.catch(fn)
			;
	}

	protected _provider(ID_SERVICES: number)
	{
		return this._cache.SERVICES[ID_SERVICES];
	}

	protected _ssh_args(ID_SERVICES: number)
	{
		let provider = this._provider(ID_SERVICES);

		const args = [
			'-o',
			'StrictHostKeyChecking=no',
			'-o',
			'UserKnownHostsFile=/dev/null',
			'-R',
			`${this.context.portOnline}:${this.context.hostname}:${this.context.port}`,
			provider,
		];

		return args;
	}

	protected _exec(ID_SERVICES: number)
	{
		const context = this.context;

		let args = this._ssh_args(ID_SERVICES);

		context.debug && context._debugConsole.debug(`[spawn]`, 'ssh', args);

		const ret = spawn('ssh', args);

		const { child } = ret;

		this.child = child;

		let urlFinded: boolean;

		return new Bluebird<IProviderConnectData>(((resolve, reject) =>
		{
			child.stderrStream.on('data', (buf) => {
				//this.context.emit(EnumLocalOutEvent.Connect, buf);

				context.debug && context._debugConsole.debug(`[stderr]`, buf.toString().replace(/\s+$/g, ''));

			});

			child
				.stdoutStream
				.on('data', (buf) =>
				{
					context.debug && context._debugConsole.debug(`[stdout]`, buf.toString().replace(/\s+$/g, ''));

					if (urlFinded)
					{
						return;
					}

					const data = Buffer.from(buf).toString();

					let SERVICES_CONTAINS = this._cache.SERVICES_CONTAINS[ID_SERVICES];

					if (data.includes(SERVICES_CONTAINS))
					{
						let urlGet = data.split(SERVICES_CONTAINS)[1];
						let url = replaceAll(urlGet, "\n", "")
							.trim()
							.replace(/\s.+$/, '')
						;

						urlFinded = true;

						let { hostname, port } = new URL(url);

						resolve({
							hostname, port,
						});
					}
					else
					{
						reject(new Error("Can't forward http traffic."))
					}

				})
			;

			setTimeout(r =>
			{

				if (!urlFinded)
				{
					reject(new Error("timeout 5s"))
				}

			}, 5000);

		}))
			.tapCatch(e =>
			{
				try
				{
					child.kill();
				}
				catch (e)
				{

				}
			})
			;
	}
}

function replaceAll(str: string, replaceWhat: string, replaceTo: string)
{
	replaceWhat = replaceWhat.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	let re = new RegExp(replaceWhat, 'g');
	return str
		.replace(re, replaceTo)
		;
}

export default BaseProvider
