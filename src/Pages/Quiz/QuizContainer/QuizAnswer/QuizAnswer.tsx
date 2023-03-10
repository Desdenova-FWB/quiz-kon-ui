import React from "react";
import Button from "../../../../Common/Button/Button";
import { IAnswer } from "../../../../Utils/testQuizzQuestions";
import "./index.scss";

export interface IQuizAnser extends IAnswer {
  onAction: (b: boolean) => {};
}

const QuizAnswer: React.FunctionComponent<IQuizAnser> = ({
  answer,
  isCorrect,
  ID,
  onAction,
}) => {
  return (
    <Button name={answer} action={() => onAction(isCorrect)} classes="btn btn-primary"/>
  );
};
export default QuizAnswer;
