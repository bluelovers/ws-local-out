/**
 * Created by user on 2019/12/14.
 */

import { EventEmitter } from 'events'
import { BaseProvider } from './provider/baseProvider';
import AbstractProvider from './AbstractProvider';
import { Console } from 'debug-color2'
import { ITSPartialWith } from 'ts-type'

const DEFAULT_PORT = 80;
const DEFAULT_TARGET = 'localhost';

interface ILocalOutConstructor<P extends AbstractProvider>
{
	portOnline: number,
	hostnameOnline: string,
	/**
	 * local server port
	 */
	port: number,
	/**
	 * local server hostname
	 */
	hostname: string,
	debug: boolean,
	provider: P;
}

export type ILocalOutConstructorParams<P extends AbstractProvider> = ILocalOutConstructorParams2<P>;

export type IConstructorClass<T> = {
	new (...argv: any): T
}

export interface ILocalOutConstructorParams1<P extends AbstractProvider> extends Partial<ILocalOutConstructor<P>>
{
	provider?: P;
	providerClass?: never;
}

export interface ILocalOutConstructorParams2<P extends AbstractProvider> extends Partial<ILocalOutConstructor<P>>
{
	/**
	 * @deprecated
	 */
	provider?: never;
	providerClass?: IConstructorClass<P>;
}

export enum EnumLocalOutEvent
{
	Constructor = 'constructor',
	Connect = 'connect',
}

export class LocalOut<P extends AbstractProvider> extends EventEmitter implements ITSPartialWith<ILocalOutConstructor<P>, 'hostnameOnline'>
{

	portOnline: number;
	hostnameOnline?: string;

	port: number;
	hostname: string;
	provider: P;
	providerClass: IConstructorClass<P>;

	_debugConsole: Console;

	constructor(config: ILocalOutConstructorParams<P> = {})
	{
		super();
		this._constructor(config);
		this.emit(EnumLocalOutEvent.Constructor)
	}

	protected _constructor(config: ILocalOutConstructorParams<P>)
	{
		let { port = DEFAULT_PORT, hostname = DEFAULT_TARGET, debug, provider, portOnline = DEFAULT_PORT, hostnameOnline, providerClass } = config;

		if (port)
		{
			this.port = port;
		}

		if (portOnline)
		{
			this.portOnline = portOnline;
		}

		if (hostnameOnline)
		{
			this.hostnameOnline = hostnameOnline;
		}

		if (hostname)
		{
			this.hostname = hostname;
		}

		if (provider)
		{
			// @ts-ignore
			this.provider = provider;

			// @ts-ignore
			this.provider.context = this;
		}

		if (providerClass)
		{
			// @ts-ignore
			this.providerClass = providerClass;
		}

		if (debug != null)
		{
			this.debug = debug;
		}
	}

	get debug()
	{
		if (!this._debugConsole)
		{
			return null;
		}

		return this._debugConsole.enabled
	}

	set debug(bool: boolean)
	{
		if (!this._debugConsole && bool)
		{
			this._debugConsole = new Console(null, {
				label: true,
				time: true,
				enabled: false,
			});
		}

		this._debugConsole.enabled = bool;
	}

	setPort(port: number)
	{
		this.port = port;
		return this;
	}

	/**
	 * @private
	 */
	on(event: EnumLocalOutEvent, listener: (...args: any[]) => void): this
	{
		return super.on(event, listener);
	}

	/**
	 * @private
	 */
	once(event: EnumLocalOutEvent, listener: (...args: any[]) => void): this
	{
		return super.once(event, listener);
	}

	/**
	 * @private
	 */
	emit(event: EnumLocalOutEvent, ...args): boolean
	{
		return super.emit(event, ...args);
	}

	protected _createProvider(): P
	{
		if (!this.provider)
		{
			let { providerClass = BaseProvider } = this;

			// @ts-ignore
			this.provider = new providerClass(this);

			this.debug && this._debugConsole.debug(`auto create provider`, providerClass, this.provider);
		}

		return this.provider;
	}

	connect()
	{
		this.debug && this._debugConsole.debug(`connect start`);
		return this._createProvider().connect();
	}

	close()
	{
		this.debug && this._debugConsole.debug(`connect close`);

		if (!this.provider)
		{
			throw new ReferenceError(`provider is not created`)
		}

		return this.provider.close();
	}

}

export default LocalOut
