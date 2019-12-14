/**
 * Created by user on 2019/12/15.
 */

import yargs from 'yargs';
import LocalOut from '../lib/index';
import { console } from 'debug-color2'

let context: LocalOut<any>;

let argv = yargs
	.option('port', {
		alias: ['p'],
		number: true,
	})
	.option('hostname', {
		alias: ['h'],
		string: true,
	})
	.argv
;

(async (argv) => {

	context = new LocalOut(argv);

	return context
		.connect()
		.tap(ret => {
			console.dir(ret)
		})
})();

process.on('exit', () => {

	try
	{
		context.close();
	}
	catch (e)
	{

	}

});
