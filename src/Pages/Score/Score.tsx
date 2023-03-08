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
    <div>
      <p>Score:</p>
      <ScoreTable results={rezultList} />

      <Button
        name="Try Quiz"
        action={() => user.changePage(user.isActive ? "quiz" : "user-info")}
      />
    </div>
  );
};
export default Score;
