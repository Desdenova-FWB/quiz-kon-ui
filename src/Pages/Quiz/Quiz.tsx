import React, {useState,useEffect} from "react"
import { observer } from "mobx-react";
import Student, { IStudent } from "../../Store/User";
import "./index.scss"
import QuizContainer from "./QuizContainer/QuizContainer";
import QuizReady from "./QuizReady/QuizReady";
import QuizResult from "./QuizResult/QuizResult";
export interface IQuiz {
    user:IStudent
}

const Quiz : React.FunctionComponent<IQuiz> = ({user})=>{

    const [isQuizzActive, setIsQuizzActive] = useState(false)
    const [startTime, setStartTime] = useState(Date.now)
    const [isQuizzFinished, setIsQuizzFinished] = useState(false)
    
    const onStart = () =>{
        setStartTime(Date.now()); 
        setIsQuizzActive(true)
    }
    const onFinish = (score:number) =>{
        Student.setScoreAndTime(score,(Date.now()-startTime)/1000)
        setIsQuizzFinished(true)
    }
    return (
    <>
        <h1 className="mb-5">Sample Quiz</h1>
        <div>
            { !isQuizzActive && !isQuizzFinished && <QuizReady onAction={ async () => onStart() } />}
        </div>
        <div>
            { isQuizzActive && !isQuizzFinished && <QuizContainer onAction={async (e) => onFinish(e) }/> } 
        </div>
        <div>
        { isQuizzFinished &&  <QuizResult /> }
        </div>
    </>
    );
}
export default observer(Quiz);