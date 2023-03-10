import userEvent from "@testing-library/user-event";
import React from "react";
import Button from "../../Common/Button/Button";
import { IStudent } from "../../Store/User";
import { rezultList } from "../../Utils/testRezults";
import "./index.scss";
import ScoreTable from "./ScoreTable/ScoreTable";

export interface IScore {
  user: IStudent;
}

const Score: React.FunctionComponent<IScore> = ({ user }) => {
  return (
    <>
      <h1 className="mt-3 mb-5">Score</h1>

      <ScoreTable results={rezultList} classes="mt-5" />

      <div className="d-grid gap-2">
        <Button
          name="Try Quiz"
          action={() => user.changePage(user.isActive ? "quiz" : "user-info")}
          classes="btn btn-primary"
        />
      </div>
    </>
  );
};
export default Score;
