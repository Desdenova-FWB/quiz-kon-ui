import { observer } from "mobx-react";
import React from "react";
import HomePage from "./Pages/HomePage/HomePage";
import Quiz from "./Pages/Quiz/Quiz";
import UserInfo from "./Pages/UserInfo/UserInfo";
import Score from "./Pages/Score/Score";
import Student from "./Store/User"

const Application : React.FunctionComponent= ()=>{


    switch(Student.page){
        case "home":
            return (
                <HomePage user={Student}/>
                )
        case "quiz":
            return (
                <Quiz user={Student}/>
                )
        case "user-info":
            return (
                <UserInfo/>
                )
        case "score":
            return (
                <Score user={Student} />
                )
        default:
            return(
               <div>not a page</div>
                )
            }

}
export default observer(Application)