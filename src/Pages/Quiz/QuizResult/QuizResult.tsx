import React from "react"
import Button from "../../../Common/Button/Button";
import Student from "../../../Store/User";

const QuizResult : React.FunctionComponent = () =>{
    return(
        <div>
            <h6>{Student.getScoreAndTime()}</h6>

            <div className="d-grid gap-2 mt-5">
                <Button name="Go to score" action={()=>Student.changePage("score")} classes="btn btn-primary"/> 
            </div>
        </div>
    )
}
 export default QuizResult;