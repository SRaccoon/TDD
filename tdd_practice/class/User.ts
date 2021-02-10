export class User {
    private id: string;
    private pw: string;
    private name: string;

    constructor (id: string, pw: string, name: string){
        this.id = id;
        this.pw = pw;
        this.name = name;
    }

    public getId(){
        return this.id;
    }

    public getPw(){
        return this.pw;
    }

    public getName(){
        return this.name;
    }
}