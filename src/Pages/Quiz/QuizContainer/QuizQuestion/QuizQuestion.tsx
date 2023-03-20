import React from "react"
import "./index.scss"

export interface IQuizQuestion{
    questionText:string
}

const QuizQuestion:React.FunctionComponent<IQuizQuestion> = ({questionText}) =>{
return(
    <h6 className="text-white text-start">{questionText}</h6>
)
}
export default QuizQuestion;