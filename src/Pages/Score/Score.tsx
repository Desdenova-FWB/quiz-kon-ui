import React, {useState, useEffect } from "react";
import axios from "axios"
import Button from "../../Common/Button/Button";
import { IStudent } from "../../Store/User";
import { rezultList } from "../../Utils/testRezults";
import "./index.scss";
import ScoreTable from "./ScoreTable/ScoreTable";
import _Global from "../../Utils/globalProps";

import tiacLogo from "../../assets/img/logo/tiac_white_640_hor.png";

export interface IScore {
  user: IStudent;
}

const Score: React.FunctionComponent<IScore> = ({ user }) => {

const [result, setResult]=  useState(rezultList);
const update = ()=>{
  axios.post(`${_Global.BE_URL}/userResult/getSortedUserResults/`,{topResults:_Global.TOP_RESULTS}).then((response)=>{
      setResult(response.data.userResults)
  })
}
  useEffect(()=>update(),[])

  return (
    <>
      <div className="small-logo">
        <img src={tiacLogo}></img>
      </div>

      <h1 className="title text-white">Rang lista</h1>

      <Button
        name="Refresh results"
        action={update}
        classes="float-end mb-2"
        isIcon={true}
        icon="bi bi-arrow-clockwise"/>

      <ScoreTable results={result} classes="mt-1 custom-table" />

      <div className="d-grid gap-2">
        <Button
          name={user.isActive ? "Ponovi kviz" : "Probaj kviz"}
          action={() =>  user.changePage(user.isActive ? "quiz" : "user-info")}
          classes="btn btn-light"
        />
      </div>
    </>
  );
};
export default Score;
