import { makeAutoObservable } from "mobx"
export interface IBaseUser {
    name: string;
    email: string;
}
export interface IUser extends IBaseUser{
    page: string;
    tel: string;
    }
export interface IStudent extends IUser{ 
    isActive:boolean;
    isSubmitted:boolean;
    changePage:(page:string )=>void;
}
 
class UserStore {
    name: string;
    email: string;
    tel: string;
    page: string;
    isActive: boolean;
    isSubmitted: boolean;
    questionCounter:number;
    private score: number;
    private time: number;

    constructor(){
        this.name="";
        this.email="";
        this.tel=""
        this.page="home";
        this.isActive=false
        this.questionCounter=1;
        this.score = 0;
        this.time = 0;
        this.isSubmitted= false;
        

        makeAutoObservable(this)
    }

    editUser (user:IUser){
        this.name=user.name;
        this.email=user.email;
        this.tel=user.tel
        this.page=user.page;
        this.isActive=true
        this.isSubmitted = false
    }
    changePage (page:string){
        this.page=page;
    }
    increseQuestionCounter (){
        this.questionCounter= ++this.questionCounter;
    }
    setScoreAndTime(newScore:number, newTime:number){
        this.score=newScore;
        this.time=newTime;
    }
    getScoreAndTime(){
        return `Score:"${this.score} in ${this.time} sec!`
    }
    toggleIsSubmitted(){
        this.isSubmitted = !this.isSubmitted
    }
}

const Student = new UserStore(); 
export default Student; 





