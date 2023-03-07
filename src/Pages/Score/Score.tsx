import userEvent from "@testing-library/user-event";
import React from "react"
import Button from "../../Common/Button/Button";
import { IStudent } from "../../Store/User";
import  "./index.scss"

export interface IScore {
    user:IStudent
}


const Score :React.FunctionComponent<IScore> = ({user}) =>{

    return (
        <div>
            <p>this is score</p>
            <Button name="Try Quiz" action={()=>{}}/>
            <Button name="Try Quiz" action={()=>{}}/>
        </div>

    )
}
export default Score;