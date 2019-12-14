/**
 * Created by user on 2019/12/15.
 */

import LocalOut, { EnumLocalOutEvent, ILocalOutConstructorParams } from './index';
import { async as spawn, SpawnASyncReturnsPromise } from 'cross-spawn-extra';
import Bluebird from 'bluebird';

export interface IProviderConnectData
{
	hostname: string,
	port: string,
}

export abstract class AbstractProvider
{
	public static desc: string;
	protected child?: SpawnASyncReturnsPromise["child"];

	constructor(protected context: LocalOut<any>)
	{
		this._constructor();
	}

	protected _constructor()
	{

	}

	abstract connect(): Bluebird<IProviderConnectData>

	close(): void
	{
		if (!this.child)
		{
			throw new ReferenceError(`process is not exists`)
		}

		return this.child.kill();
	}

}

export default AbstractProvider
