import React, {useState, useEffect } from "react";
import axios from "axios"
import Button from "../../Common/Button/Button";
import { IStudent } from "../../Store/User";
import { rezultList } from "../../Utils/testRezults";
import "./index.scss";
import ScoreTable from "./ScoreTable/ScoreTable";
import _Global from "../../Utils/globalProps";

export interface IScore {
  user: IStudent;
}

const Score: React.FunctionComponent<IScore> = ({ user }) => {

const [result, setResult]=  useState(rezultList);
const [isLoaded, setIsLoaded] = useState(false)
const update = ()=>{
  setIsLoaded(false)
  axios.post(`${_Global.BE_URL}/userResult/getSortedUserResults/`,{topResults:_Global.TOP_RESULTS}).then((response)=>{
      setResult(response.data.userResults)
      setIsLoaded(true)
  })
}
  useEffect(()=>update(),[])

  return (
    <>
      <h1 className="mt-3 mb-5">Score</h1>

       {
        isLoaded && <ScoreTable results={result} classes="mt-5" />
        
       }
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
      </div>
    </>
  );
};
export default Score;
