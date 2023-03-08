import React, { Fragment } from "react";
import "./index.scss"
import { IBaseUser } from "../../../../Store/User";

export interface IScoreTableItem extends IBaseUser {
    ID: number
    time :number
    score: number
}



const ScoreTableItem : React.FunctionComponent<IScoreTableItem> = ({name,email,score,time})=>{
    return(
        <Fragment>
        <tr>
            <td>
                {name}
            </td> 
            <td>
                {email}
            </td> 
            <td>
                {score}
            </td> 
            <td>
                {time}
            </td> 
        </tr>
        </Fragment>
    )
}

export default ScoreTableItem;