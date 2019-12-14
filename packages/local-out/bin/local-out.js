"use strict";
/**
 * Created by user on 2019/12/15.
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtb3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9jYWwtb3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7Ozs7QUFFSCxrREFBMEI7QUFDMUIseURBQW9DO0FBQ3BDLCtDQUFzQztBQUV0QyxJQUFJLE9BQXNCLENBQUM7QUFFM0IsSUFBSSxJQUFJLEdBQUcsZUFBSztLQUNkLE1BQU0sQ0FBQyxNQUFNLEVBQUU7SUFDZixLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDWixNQUFNLEVBQUUsSUFBSTtDQUNaLENBQUM7S0FDRCxNQUFNLENBQUMsVUFBVSxFQUFFO0lBQ25CLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNaLE1BQU0sRUFBRSxJQUFJO0NBQ1osQ0FBQztLQUNELElBQUksQ0FDTDtBQUVELENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFO0lBRWYsT0FBTyxHQUFHLElBQUksZUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTdCLE9BQU8sT0FBTztTQUNaLE9BQU8sRUFBRTtTQUNULEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNWLHNCQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ2pCLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUVMLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtJQUV2QixJQUNBO1FBQ0MsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ2hCO0lBQ0QsT0FBTyxDQUFDLEVBQ1I7S0FFQztBQUVGLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxOS8xMi8xNS5cbiAqL1xuXG5pbXBvcnQgeWFyZ3MgZnJvbSAneWFyZ3MnO1xuaW1wb3J0IExvY2FsT3V0IGZyb20gJy4uL2xpYi9pbmRleCc7XG5pbXBvcnQgeyBjb25zb2xlIH0gZnJvbSAnZGVidWctY29sb3IyJ1xuXG5sZXQgY29udGV4dDogTG9jYWxPdXQ8YW55PjtcblxubGV0IGFyZ3YgPSB5YXJnc1xuXHQub3B0aW9uKCdwb3J0Jywge1xuXHRcdGFsaWFzOiBbJ3AnXSxcblx0XHRudW1iZXI6IHRydWUsXG5cdH0pXG5cdC5vcHRpb24oJ2hvc3RuYW1lJywge1xuXHRcdGFsaWFzOiBbJ2gnXSxcblx0XHRzdHJpbmc6IHRydWUsXG5cdH0pXG5cdC5hcmd2XG47XG5cbihhc3luYyAoYXJndikgPT4ge1xuXG5cdGNvbnRleHQgPSBuZXcgTG9jYWxPdXQoYXJndik7XG5cblx0cmV0dXJuIGNvbnRleHRcblx0XHQuY29ubmVjdCgpXG5cdFx0LnRhcChyZXQgPT4ge1xuXHRcdFx0Y29uc29sZS5kaXIocmV0KVxuXHRcdH0pXG59KSgpO1xuXG5wcm9jZXNzLm9uKCdleGl0JywgKCkgPT4ge1xuXG5cdHRyeVxuXHR7XG5cdFx0Y29udGV4dC5jbG9zZSgpO1xuXHR9XG5cdGNhdGNoIChlKVxuXHR7XG5cblx0fVxuXG59KTtcbiJdfQ==