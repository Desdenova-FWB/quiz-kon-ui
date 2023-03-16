import React, {useEffect, useState} from "react"
import { observer } from "mobx-react";
import Student, { IStudent } from "../../Store/User";
import "./index.scss"
import QuizContainer from "./QuizContainer/QuizContainer";
import QuizReady from "./QuizReady/QuizReady";
import QuizResult from "./QuizResult/QuizResult";
import axios from "axios";
import _Global from "../../Utils/globalProps";
export interface IQuiz {
    user:IStudent
}

const Quiz : React.FunctionComponent<IQuiz> = ({user})=>{

    const [qestions, setQuestions] = useState([])
    const [isQuizzActive, setIsQuizzActive] = useState(false)
    const [startTime, setStartTime] = useState(Date.now)
    const [isQuizzFinished, setIsQuizzFinished] = useState(false)

    const onStart = () =>{
        setStartTime(Date.now()); 
        setIsQuizzActive(true)
    }
    const onFinish = (score:number) =>{
        Student.setScoreAndTime(score,(Date.now()-startTime)/1000)
        if (!Student.isSubmitted){
            axios.post(`${_Global.BE_URL}/userResult/create/`,{...Student}).then(()=>{
                setIsQuizzFinished(true);
                Student.toggleIsSubmitted();
            })
        } else{
            setIsQuizzFinished(true);
        }
    }
    useEffect (()=>{
        axios.post(`${_Global.BE_URL}/question/getRandomQuestions/`, {numberOfQuestions:_Global.NUMBER_OF_QUESTIONS})
        .then((response) => {
            console.log("--------",response.data.questions.length)
          setQuestions(response.data.questions);
          });
        
      },[])  

    return (
    <>
        <h1 className="mb-5">Sample Quiz</h1>
        <div>
            { !isQuizzActive && !isQuizzFinished && <QuizReady onAction={ async () => onStart() } />}
        </div>
        <div>
            { isQuizzActive && !isQuizzFinished && <QuizContainer  questions={qestions} startTime={startTime} onAction={async (e) => onFinish(e) }/> } 
        </div>
        <div>
        { isQuizzFinished &&  <QuizResult /> }
        </div>
    </>
    );
}
export default observer(Quiz);