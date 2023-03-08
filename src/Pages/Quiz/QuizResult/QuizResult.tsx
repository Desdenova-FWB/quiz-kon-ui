import React from "react"
import Button from "../../../Common/Button/Button";
import Student from "../../../Store/User";

const QuizResult : React.FunctionComponent = () =>{
    return(
        <div>
            <p> {Student.getScoreAndTime()} </p>
            <Button name="Go to score" action={()=>Student.changePage("score")} /> 
        </div>
    )
}
 export default QuizResult;