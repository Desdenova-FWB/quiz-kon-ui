import React from "react"
import Button from "../../../Common/Button/Button";
import Student from "../../../Store/User";

import logo from "../../../assets/img/logo/tiac_mi_logo_h.png";

import "./index.scss";

const QuizResult : React.FunctionComponent = () => {
    return(
        <>
            <div className="small-logo">
                <img src={logo}></img>
            </div>

            <h1 className="title text-white mb-5 mt-5">Tvoj rezultat</h1>

            <h1 className="text-white mt-3 text-start ms-5">Broj tačnih odgovora: {Student.getScore()}</h1>

            <h1 className="text-white text-start ms-5">Vreme: {Student.getTime()}</h1>

            <div className="d-grid gap-2 mt-5">
                <Button name="Rang lista" action={()=>Student.changePage("score")} classes="btn btn-light"/> 
            </div>
        </>
    )
}
 export default QuizResult;