import React from "react"
import "./index.scss"

export interface IQuizQuestion{
 queston:string
}

const QuizQuestion:React.FunctionComponent<IQuizQuestion> = ({queston}) =>{
return(
    <div>
        {queston}
    </div>
)
}
export default QuizQuestion;