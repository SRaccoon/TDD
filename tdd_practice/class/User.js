"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, pw, name) {
        this.id = id;
        this.pw = pw;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getPw() {
        return this.pw;
    }
    getName() {
        return this.name;
    }
}
exports.User = User;
