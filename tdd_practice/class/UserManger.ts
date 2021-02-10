import { User } from './User';

export class UserManager {
    private static instance: UserManager;
    private userList: Map<string, User>;

    private constructor(){
        this.userList = new Map<string, User>();
    }

    public static getInstance(){
        if(!UserManager.instance){
            UserManager.instance = new UserManager()
        }
        return UserManager.instance;
    }

    public getUser(id: string) {
        return this.userList.get(id);
    }

    public addUser(id: string, pw:string, name:string){
        let user = new User(id, pw, name);
        this.userList.set(user.getId(), user);
    }

    public removeUser(id: string) {
        return this.userList.delete(id);
    }

}