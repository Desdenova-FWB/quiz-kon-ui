import React, { useState } from "react";
import QuizQuestion from "./QuizQuestion/QuizQuestion";
import "./index.scss";
import { IquizzQuestion, } from "../../../Utils/testQuizzQuestions";
import QuizAnswer from "./QuizAnswer/QuizAnswer";
import QuizHeader from "./QuizHeader/QuizHeader";
import Student from "../../../Store/User";
import { observer } from "mobx-react";

import logo from "../../../assets/img/logo/tiac_mi_logo_h.png";

interface IQuizContainer {
  onAction: (points: number) => {};
  questions: IquizzQuestion[]
  startTime: number
}

const QuizContainer: React.FunctionComponent<IQuizContainer> = ({
  onAction,
  questions,
  startTime
}) => {
  const [answerCounter, setAnswerCounter] = useState(0);
  const [questionCounter, setquestionCounter] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[questionCounter]
  );

  const action = (isCorrect: boolean) => {
    if (questions.length -1 === questionCounter) {
      if (isCorrect) {
        onAction(answerCounter + 1);
      }
      else{
        onAction(answerCounter);
      }
    } else {
      if (isCorrect) {
        setAnswerCounter(answerCounter + 1);
      }
      setCurrentQuestion(questions[questionCounter + 1]);
      setquestionCounter(questionCounter + 1);
      Student.increseQuestionCounter();
    }
  };

  const getRandomType = () => {
    const types = ['bison', 'eagle', 'turtle', 'bear'];

    return types[Math.floor(Math.random() * types.length)];
  };


  return (
    <>
      <div className="small-logo">
        <img src={logo}></img>
      </div>

      <h1 className="title text-white mt-4">Kviz</h1>

      <QuizHeader startTime={startTime} questionCounter={questionCounter+1} amountOfQuestions={questions.length} />
      
      <div className="mt-5">
        <QuizQuestion questionText={currentQuestion.questionText} />
        <div className="d-grid gap-4 mt-5 mb-5">
          {currentQuestion.answers.map((answer) => {
            return (
              <QuizAnswer
                key={answer.__id}
                __id={answer.__id}
                answerText={answer.answerText}
                isCorrect={answer.isCorrect}
                onAction={async (e: boolean) => action(e)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default observer(QuizContainer);
