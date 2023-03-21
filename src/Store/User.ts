import { makeAutoObservable } from "mobx";
export interface IBaseUser {
  name: string;
  email: string;
}
export interface IUser extends IBaseUser {
  _id: string;
  page: string;
  tel: string;
}
export interface IStudent extends IUser {
  isActive: boolean;
  isSubmitted: boolean;
  changePage: (page: string) => void;
}

class UserStore {
  _id: string;
  name: string;
  email: string;
  tel: string;
  page: string;
  isActive: boolean;
  isSubmitted: boolean;
  questionCounter: number;
  private score: number;
  private time: number;

  constructor() {
    this._id = "";
    this.name = "";
    this.email = "";
    this.tel = "";
    this.page = "home";
    this.isActive = false;
    this.questionCounter = 1;
    this.score = 0;
    this.time = 0;
    this.isSubmitted = false;

    makeAutoObservable(this);
  }

  // setId(id:string){
  //     this.__id=id;
  // }
  editUser(user: IUser) {
    this._id = user._id;
    this.name = user.name;
    this.email = user.email;
    this.tel = user.tel;
    this.page = user.page;
    this.isActive = true;
    this.isSubmitted = false;
  }
  changePage(page: string) {
    this.page = page;
  }
  increseQuestionCounter() {
    this.questionCounter = ++this.questionCounter;
  }
  setScoreAndTime(newScore: number, newTime: number) {
    this.score = newScore;
    this.time = newTime;
  }
  getScoreAndTime() {
    return `Score:"${this.score} in ${this.time} sec!`;
  }
  getScore() {
    return this.score;
  }
  getTime() {
    return this.time;
  }
  toggleIsSubmitted() {
    this.isSubmitted = !this.isSubmitted;
  }
  getStudentInfo() {
    return {
      _id: this._id,
      name: this.name,
      email: this.email,
      tel: this.tel,
      score: this.score,
      time: this.time,
    };
  }
}

const Student = new UserStore();
export default Student;
