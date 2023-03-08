import React from "react";
import Button from "../../../Common/Button/Button";
import Student from "../../../Store/User";

interface IQuizzReady {
    onAction: ()=>{}
}
const QuizReady : React.FunctionComponent<IQuizzReady> = ({onAction}) =>{

    return(
        <div>
            <p>Are You READY???</p>
            <Button name="READY" action={onAction}/>
            <Button name="Go To Score" action={()=>Student.changePage("score")}/>
        </div>
    )
}
export default QuizReady