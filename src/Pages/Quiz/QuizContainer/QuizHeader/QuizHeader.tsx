import { observer } from "mobx-react";
import React , {useState, useEffect} from "react"
import "./index.scss"

export interface IQuizHeader {
    startTime:number
    questionCounter:number
    amountOfQuestions:number
}
const QuizHeader: React.FunctionComponent<IQuizHeader> = ({startTime,questionCounter,amountOfQuestions})=>{

    const [currentTime, setCurrentTime] = useState(0); 

    const updateTime = ()=>{
        setCurrentTime((Date.now()-startTime)/1000)
    }

    setInterval(updateTime,100)
    return (
        <div>
            <div className="text-white float-end fw-bold">{currentTime.toFixed(2)}</div>
            <span className="text-white float-start fw-bold">{questionCounter}/{amountOfQuestions}</span>
        </div>
    )
}

export default observer(QuizHeader);
