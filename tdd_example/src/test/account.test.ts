import { expect } from 'chai';

class Account {
    private balance: number;

    constructor(balance: number = 0) {
        this.balance = balance
    }

    public getBalance() {
        return this.balance;
    }

    public deposit(addBalance: number){
        this.balance += 2000;
    }
}

// account.test.ts
describe('계좌 클래스 테스트',()=>{
    it('잔고 조회하기', (done)=>{
        let account = new Account(3000);
        expect(account).be.exist;
        expect(account.getBalance()).be.equal(3000);
        
        // 테스트 성공
        done();
    })

    it('입금하기', (done)=>{
        let account = new Account(3000);
        account.deposit(2000)
        expect(account.getBalance()).be.equal(5000);
        
        // 테스트 성공
        done();
    })

    
})

