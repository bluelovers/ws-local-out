import { ServeoProvider } from '../lib/provider/ServeoProvider';
import LocalOut, { EnumLocalOutEvent } from '../lib';
import { console } from 'debug-color2'

let YOUR_PORT = 80;

let context = new LocalOut({
	port: YOUR_PORT,
});

context.connect().tap(ret => {

	console.log(`server online by`, 'hostname:', ret.hostname, 'port:', ret.port);

	/**
	 * close connect
	 */
	context.close();
});

