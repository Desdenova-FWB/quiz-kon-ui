import { makeAutoObservable } from "mobx"

class UserStore {

    name: string;
    email: string;
    tel: string;
    page: string;
    isActive: boolean;

    constructor(){
        this.name="";
        this.email="";
        this.tel=""
        this.page="home";
        this.isActive=false
        makeAutoObservable(this)
    }

    editUser (user:IUser){
        this.name=user.name;
        this.email=user.email;
        this.tel=user.tel
        
        this.page=user.page;
    }

    // changeName(name:string){
    //     console.log(name)
    //     console.log(this)
    //     this.name = name;
    // }
    // changeEmail(email:string){
    //     this.email = email;
    // }
    // changeTel(tel:string){
    //     this.tel = tel;
    // }

    changePage (page:string){
        console.log(`page: ${page}`)
        this.page=page;

        console.log(this)
    }


}

const Student = new UserStore(); 
export default Student; 

export interface IUser {
        name: string;
        email: string;
        tel: string;
        page: string;
    }
    export interface IStudent extends IUser{ 
    isActive:boolean;
    changePage:(page:string )=>void;
}


