import React from "react"
import "./index.scss"

export interface IQuizQuestion{
 queston:string
}

const QuizQuestion:React.FunctionComponent<IQuizQuestion> = ({queston}) =>{
return(
    <h6>{queston}</h6>
)
}
export default QuizQuestion;