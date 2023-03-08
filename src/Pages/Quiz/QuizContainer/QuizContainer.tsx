import React, { useState } from "react";
import QuizQuestion from "./QuizQuestion/QuizQuestion";
import "./index.scss";
import { testQuizzQuestion } from "../../../Utils/testQuizzQuestions";
import QuizAnswer from "./QuizAnswer/QuizAnswer";

interface IQuizContainer {
  onAction: (points: number) => {};
}

const QuizContainer: React.FunctionComponent<IQuizContainer> = ({
  onAction,
}) => {
  const [questions, setQuestions] = useState(testQuizzQuestion);
  const [answerCounter, setAnswerCounter] = useState(0);
  const [questionCounter, setquestionCounter] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[questionCounter]
  );

  const action = (isCorrect: boolean) => {
    if (questions.length - 1 == questionCounter) {
      onAction(answerCounter);
    } else {
      if (isCorrect) {
        setAnswerCounter(answerCounter + 1);
      }
      setCurrentQuestion(questions[questionCounter + 1]);
      setquestionCounter(questionCounter + 1);
    }
  };

  return (
    <div>
      <QuizQuestion queston={currentQuestion.quiestion} />
      <div>
        {currentQuestion.answers.map((answer) => {
          return (
            <QuizAnswer
              key={answer.ID}
              ID={answer.ID}
              answer={answer.answer}
              isCorrect={answer.isCorrect}
              onAction={async (e: boolean) => action(e)}
            />
          );
        })}
      </div>
    </div>
  );
};
export default QuizContainer;
