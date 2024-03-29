import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import Student, { IStudent } from "../../Store/User";
import "./index.scss";
import QuizContainer from "./QuizContainer/QuizContainer";
import QuizReady from "./QuizReady/QuizReady";
import QuizResult from "./QuizResult/QuizResult";
import axios from "axios";
import _Global from "../../Utils/globalProps";
export interface IQuiz {
  user: IStudent;
}

const Quiz: React.FunctionComponent<IQuiz> = ({ user }) => {
  const [qestions, setQuestions] = useState();
  const [isQuizzActive, setIsQuizzActive] = useState(true);
  const [startTime, setStartTime] = useState(Date.now);
  const [isQuizzFinished, setIsQuizzFinished] = useState(false);

  const onStart = () => {
    setStartTime(Date.now());
    setIsQuizzActive(true);
  };
  const onFinish = (score: number) => {
    Student.setScoreAndTime(score, (Date.now() - startTime) / 1000);
    console.log(Student._id);
    axios
      .patch(`${_Global.BE_URL}/userResult/update`, {
        ...Student.getStudentInfo(),
      })
      .then(() => {
        setIsQuizzFinished(true);
      });
  };
  useEffect(() => {
    axios
      .post(`${_Global.BE_URL}/question/getRandomQuestions/`, {
        numberOfQuestions: _Global.NUMBER_OF_QUESTIONS,
      })
      .then((response) => {
        setQuestions(response.data.questions);
        onStart();
      });
  }, []);

  return (
    <>
      {qestions && (
        <>
          <div>
            {!isQuizzActive && !isQuizzFinished && (
              <QuizReady onAction={async () => onStart()} />
            )}
          </div>
          <div>
            {isQuizzActive && !isQuizzFinished && (
              <QuizContainer
                questions={qestions}
                startTime={startTime}
                onAction={async (e) => onFinish(e)}
              />
            )}
          </div>
          <div>{isQuizzFinished && <QuizResult />}</div>
        </>
      )}
    </>
  );
};
export default observer(Quiz);
