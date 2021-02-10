"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManager = void 0;
const User_1 = require("./User");
class UserManager {
    constructor() {
        this.userList = new Map();
    }
    static getInstance() {
        if (!UserManager.instance) {
            UserManager.instance = new UserManager();
        }
        return UserManager.instance;
    }
    getUser(id) {
        return this.userList.get(id);
    }
    addUser(id, pw, name) {
        let user = new User_1.User(id, pw, name);
        this.userList.set(user.getId(), user);
    }
    removeUser(id) {
        return this.userList.delete(id);
    }
}
exports.UserManager = UserManager;
