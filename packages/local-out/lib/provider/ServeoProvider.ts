/**
 * Created by user on 2019/12/14.
 */
import { EnumLocalOutEvent } from '../index';
import { async as spawn } from 'cross-spawn-extra';
import Bluebird from 'bluebird';
import { AbstractProvider, IProviderConnectData } from '../AbstractProvider';
import BaseProvider from './baseProvider';

export class ServeoProvider extends BaseProvider
{
	static desc = `serveo provider with subdomain`;

	protected _constructor()
	{
		super._constructor();
		this._cache.ID_SERVICES = 1;
	}

	protected _ssh_args(ID_SERVICES: number)
	{
		const context = this.context;

		let args = super._ssh_args(ID_SERVICES);

		if (context.hostnameOnline)
		{
			args.splice(-1, 0, '-l', context.hostnameOnline)
		}

		return args;
	}

}

export default BaseProvider
