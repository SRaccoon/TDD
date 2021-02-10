import request from 'supertest'
import {expect} from 'chai';
const app = require('../app');

describe('POST /addUser는', function(){
    describe('성공시', function(){
        it('id = test, pw = test, name = test', function(done){
            request(app)
                .post('/addUser')
                .send({id:'test', pw:'test', name:'test'})
                .expect(200)
                .end(function(err, res) {
                    if(err) {
                        throw err;
                    }
                    
                    let user = res.body;
                    expect(user).have.property('id');
                    expect(user).have.property('name');
                    expect(user.id).be.a('string');
                    expect(user.name).be.a('string');
    
                    done();
                })
        })
    })
})


describe('add user', function(){
    it('id = test, pw = test, name = test', function(done){
        request(app)
            .post('/addUser')
            .send({id:'test', pw:'test', name:'test'})
            .expect(200)
            .end(function(err, res) {
                if(err) {
                    throw err;
                }
                
                let user = res.body;
                expect(user).have.property('id');
                expect(user).have.property('pw');
                expect(user).have.property('name');
                expect(user.id).be.a('string');
                expect(user.pw).be.a('string');
                expect(user.name).be.a('string');

                done();
            })
    })
})