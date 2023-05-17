import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../Common/Button/Button";
import { IStudent } from "../../Store/User";
import "./index.scss";
import ScoreTable from "./ScoreTable/ScoreTable";
import _Global from "../../Utils/globalProps";

import logo from "../../assets/img/logo/tiac_mi_logo_h.png";

export interface IScore {
  user: IStudent;
}

const Score: React.FunctionComponent<IScore> = ({ user }) => {
  const [result, setResult] = useState([]);
  const update = () => {
    axios
      .post(`${_Global.BE_URL}/userResult/getSortedUserResults/`, {
        topResults: _Global.TOP_RESULTS,
      })
      .then((response) => {
        setResult(response.data.userResults);
      });
  };
  useEffect(() => update(), []);

  return (
    <div className="score-container">
      <div className="small-logo">
        <img src={logo}></img>
      </div>
    <div className="score-content">
      <h1 className="title text-white">Rang lista</h1>

      <Button
        name="Refresh results"
        action={update}
        classes="float-end mb-2 refresh"
        isIcon={true}
        icon="bi bi-arrow-clockwise"
      />

      <ScoreTable results={result} classes="mt-1 custom-table" />

    </div>
    </div>
  );
};
export default Score;
