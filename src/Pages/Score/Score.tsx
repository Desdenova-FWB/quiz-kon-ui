import React, {useState, useEffect } from "react";
import axios from "axios"
import Button from "../../Common/Button/Button";
import { IStudent } from "../../Store/User";
import { rezultList } from "../../Utils/testRezults";
import "./index.scss";
import ScoreTable from "./ScoreTable/ScoreTable";
import _Global from "../../Utils/globalProps";
import { Table } from "@mui/material";
import MUITable from "./ScoreTable/MUITable";
import { User } from "../../Models/User";

export interface IScore {
  user: IStudent;
}

const Score: React.FunctionComponent<IScore> = ({ user }) => {

const [result, setResult]=useState(new Array<User>());
const update = ()=>{
  axios.post(`${_Global.BE_URL}/userResult/getSortedUserResults/`,{topResults:_Global.TOP_RESULTS}).then((response)=>{
      setResult(response.data.userResults)
  })
}
  useEffect(()=>update(),[])

  return (
    <div className="results">
      <div className="title-div">
        <h1 className="title">Rezultati</h1>
      </div>
      <div className="table-div">
        <MUITable content={result}/>
      </div>

      {/* <ScoreTable results={result} classes="mt-5" />
      <div className="d-grid gap-2">
      <Button
          name="Refresh results"
          action={update}
          classes="btn btn-primary"
        />
        <Button
          name="Try Quiz"
          action={() =>  user.changePage(user.isActive ? "quiz" : "user-info")}
          classes="btn btn-primary"
        />
      </div> */}
    </div>
  );
};
export default Score;
