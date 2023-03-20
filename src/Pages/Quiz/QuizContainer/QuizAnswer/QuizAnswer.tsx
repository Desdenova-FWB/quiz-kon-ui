import React from "react";
import Button from "../../../../Common/Button/Button";
import { IAnswer } from "../../../../Utils/testQuizzQuestions";
import "./index.scss";

export interface IQuizAnser extends IAnswer {
  onAction: (b: boolean) => {};
}

const QuizAnswer: React.FunctionComponent<IQuizAnser> = ({
  answerText,
  isCorrect,
  onAction,
}) => {
  return (
    <Button name={answerText} action={() => onAction(isCorrect)} classes="btn btn-light"/>
  );
};
export default QuizAnswer;
