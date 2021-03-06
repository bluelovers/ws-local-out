"use strict";
/**
 * Created by user on 2019/12/15.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractProvider {
    constructor(context) {
        this.context = context;
        this._constructor();
    }
    _constructor() {
    }
    close() {
        if (!this.child) {
            throw new ReferenceError(`process is not exists`);
        }
        return this.child.kill();
    }
}
exports.AbstractProvider = AbstractProvider;
exports.default = AbstractProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RQcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFic3RyYWN0UHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHOztBQVlILE1BQXNCLGdCQUFnQjtJQUtyQyxZQUFzQixPQUFzQjtRQUF0QixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBRTNDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRVMsWUFBWTtJQUd0QixDQUFDO0lBSUQsS0FBSztRQUVKLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUNmO1lBQ0MsTUFBTSxJQUFJLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO1NBQ2pEO1FBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7Q0FFRDtBQTNCRCw0Q0EyQkM7QUFFRCxrQkFBZSxnQkFBZ0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMTkvMTIvMTUuXG4gKi9cblxuaW1wb3J0IExvY2FsT3V0LCB7IEVudW1Mb2NhbE91dEV2ZW50LCBJTG9jYWxPdXRDb25zdHJ1Y3RvclBhcmFtcyB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgYXN5bmMgYXMgc3Bhd24sIFNwYXduQVN5bmNSZXR1cm5zUHJvbWlzZSB9IGZyb20gJ2Nyb3NzLXNwYXduLWV4dHJhJztcbmltcG9ydCBCbHVlYmlyZCBmcm9tICdibHVlYmlyZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3ZpZGVyQ29ubmVjdERhdGFcbntcblx0aG9zdG5hbWU6IHN0cmluZyxcblx0cG9ydDogc3RyaW5nLFxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RQcm92aWRlclxue1xuXHRwdWJsaWMgc3RhdGljIGRlc2M6IHN0cmluZztcblx0cHJvdGVjdGVkIGNoaWxkPzogU3Bhd25BU3luY1JldHVybnNQcm9taXNlW1wiY2hpbGRcIl07XG5cblx0Y29uc3RydWN0b3IocHJvdGVjdGVkIGNvbnRleHQ6IExvY2FsT3V0PGFueT4pXG5cdHtcblx0XHR0aGlzLl9jb25zdHJ1Y3RvcigpO1xuXHR9XG5cblx0cHJvdGVjdGVkIF9jb25zdHJ1Y3RvcigpXG5cdHtcblxuXHR9XG5cblx0YWJzdHJhY3QgY29ubmVjdCgpOiBCbHVlYmlyZDxJUHJvdmlkZXJDb25uZWN0RGF0YT5cblxuXHRjbG9zZSgpOiB2b2lkXG5cdHtcblx0XHRpZiAoIXRoaXMuY2hpbGQpXG5cdFx0e1xuXHRcdFx0dGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKGBwcm9jZXNzIGlzIG5vdCBleGlzdHNgKVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmNoaWxkLmtpbGwoKTtcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFic3RyYWN0UHJvdmlkZXJcbiJdfQ==