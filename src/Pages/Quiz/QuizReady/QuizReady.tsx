import React from "react";
import Button from "../../../Common/Button/Button";
import Student from "../../../Store/User";

interface IQuizzReady {
    onAction: ()=>{}
}
const QuizReady : React.FunctionComponent<IQuizzReady> = ({onAction}) =>{

    return(
        <>
            <h3 className="mb-3">Are You READY???</h3>

            <div className="d-grid gap-2 mt-5">
                <Button name="READY" action={onAction} classes="btn btn-primary"/>
                <Button name="Go To Score" action={()=>Student.changePage("score")} classes="btn btn-primary"/>
            </div>
        </>
    )
}
export default QuizReady