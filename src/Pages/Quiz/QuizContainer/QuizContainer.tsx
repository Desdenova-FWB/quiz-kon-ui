import React, { useState } from "react";
import QuizQuestion from "./QuizQuestion/QuizQuestion";
import "./index.scss";
import { IquizzQuestion, } from "../../../Utils/testQuizzQuestions";
import QuizAnswer from "./QuizAnswer/QuizAnswer";
import QuizHeader from "./QuizHeader/QuizHeader";
import Student from "../../../Store/User";
import { observer } from "mobx-react";

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
    if (questions.length - 1 === questionCounter) {
      onAction(answerCounter);
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
    <div className={[getRandomType(), 'card quiz-question-card'].join(' ')}>
      <QuizHeader startTime={startTime} questionCounter={questionCounter+1} amountOfQuestions={questions.length} />
      <div className="question-logo"></div>
      <div className="card-body">
        <QuizQuestion questionText={currentQuestion.questionText} />
        <div className="d-grid gap-2 mt-5 mb-5">
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
    </div>
  );
};
export default observer(QuizContainer);
