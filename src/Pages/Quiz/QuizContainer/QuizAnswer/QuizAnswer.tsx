import React from "react"
import Button from "../../../../Common/Button/Button";
import { IAnswer } from "../../../../Utils/testQuizzQuestions";
import "./index.scss"

export interface IQuizAnser  extends IAnswer{
    onAction:()=>{}
}

const QuizAnswer: React.FunctionComponent<IQuizAnser> = ({answer, ID,onAction})=>{

    return (
        <div>
            <Button name={answer} action={onAction}/> 
        </div>
    )
}
export default QuizAnswer;