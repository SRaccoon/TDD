"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const chai_1 = require("chai");
const app = require('../app');
describe('POST /addUser는', function () {
    describe('성공시', function () {
        it('id = test, pw = test, name = test', function (done) {
            supertest_1.default(app)
                .post('/addUser')
                .send({ id: 'test', pw: 'test', name: 'test' })
                .expect(200)
                .end(function (err, res) {
                if (err) {
                    throw err;
                }
                let user = res.body;
                chai_1.expect(user).have.property('id');
                chai_1.expect(user).have.property('name');
                chai_1.expect(user.id).be.a('string');
                chai_1.expect(user.name).be.a('string');
                done();
            });
        });
    });
});
describe('add user', function () {
    it('id = test, pw = test, name = test', function (done) {
        supertest_1.default(app)
            .post('/addUser')
            .send({ id: 'test', pw: 'test', name: 'test' })
            .expect(200)
            .end(function (err, res) {
            if (err) {
                throw err;
            }
            let user = res.body;
            chai_1.expect(user).have.property('id');
            chai_1.expect(user).have.property('pw');
            chai_1.expect(user).have.property('name');
            chai_1.expect(user.id).be.a('string');
            chai_1.expect(user.pw).be.a('string');
            chai_1.expect(user.name).be.a('string');
            done();
        });
    });
});
