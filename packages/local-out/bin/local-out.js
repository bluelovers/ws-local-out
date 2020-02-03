#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const index_1 = __importDefault(require("../lib/index"));
const debug_color2_1 = require("debug-color2");
let context;
let argv = yargs_1.default
    .option('port', {
    alias: ['p'],
    number: true,
})
    .option('hostname', {
    alias: ['h'],
    string: true,
})
    .argv;
(async (argv) => {
    context = new index_1.default(argv);
    return context
        .connect()
        .tap(ret => {
        debug_color2_1.console.dir(ret);
    });
})();
process.on('exit', () => {
    try {
        context.close();
    }
    catch (e) {
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtb3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9jYWwtb3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLGtEQUEwQjtBQUMxQix5REFBb0M7QUFDcEMsK0NBQXNDO0FBRXRDLElBQUksT0FBc0IsQ0FBQztBQUUzQixJQUFJLElBQUksR0FBRyxlQUFLO0tBQ2QsTUFBTSxDQUFDLE1BQU0sRUFBRTtJQUNmLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLE1BQU0sRUFBRSxJQUFJO0NBQ1osQ0FBQztLQUNELE1BQU0sQ0FBQyxVQUFVLEVBQUU7SUFDbkIsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osTUFBTSxFQUFFLElBQUk7Q0FDWixDQUFDO0tBQ0QsSUFBSSxDQUNMO0FBRUQsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFFZixPQUFPLEdBQUcsSUFBSSxlQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFN0IsT0FBTyxPQUFPO1NBQ1osT0FBTyxFQUFFO1NBQ1QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ1Ysc0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDakIsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsRUFBRSxDQUFDO0FBRUwsT0FBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0lBRXZCLElBQ0E7UUFDQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDaEI7SUFDRCxPQUFPLENBQUMsRUFDUjtLQUVDO0FBRUYsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXG5cbmltcG9ydCB5YXJncyBmcm9tICd5YXJncyc7XG5pbXBvcnQgTG9jYWxPdXQgZnJvbSAnLi4vbGliL2luZGV4JztcbmltcG9ydCB7IGNvbnNvbGUgfSBmcm9tICdkZWJ1Zy1jb2xvcjInXG5cbmxldCBjb250ZXh0OiBMb2NhbE91dDxhbnk+O1xuXG5sZXQgYXJndiA9IHlhcmdzXG5cdC5vcHRpb24oJ3BvcnQnLCB7XG5cdFx0YWxpYXM6IFsncCddLFxuXHRcdG51bWJlcjogdHJ1ZSxcblx0fSlcblx0Lm9wdGlvbignaG9zdG5hbWUnLCB7XG5cdFx0YWxpYXM6IFsnaCddLFxuXHRcdHN0cmluZzogdHJ1ZSxcblx0fSlcblx0LmFyZ3ZcbjtcblxuKGFzeW5jIChhcmd2KSA9PiB7XG5cblx0Y29udGV4dCA9IG5ldyBMb2NhbE91dChhcmd2KTtcblxuXHRyZXR1cm4gY29udGV4dFxuXHRcdC5jb25uZWN0KClcblx0XHQudGFwKHJldCA9PiB7XG5cdFx0XHRjb25zb2xlLmRpcihyZXQpXG5cdFx0fSlcbn0pKCk7XG5cbnByb2Nlc3Mub24oJ2V4aXQnLCAoKSA9PiB7XG5cblx0dHJ5XG5cdHtcblx0XHRjb250ZXh0LmNsb3NlKCk7XG5cdH1cblx0Y2F0Y2ggKGUpXG5cdHtcblxuXHR9XG5cbn0pO1xuIl19