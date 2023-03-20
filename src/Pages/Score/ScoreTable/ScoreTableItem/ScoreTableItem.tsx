import React, { Fragment } from "react";
import "./index.scss"
import { IBaseUser } from "../../../../Store/User";

export interface IScoreTableItem extends IBaseUser {
    __id: number
    time :number
    score: number
}



const ScoreTableItem : React.FunctionComponent<IScoreTableItem> = ({__id,name,email,score,time})=>{
    return(
        <Fragment>
        <tr>
            <td>
                {__id}
            </td> 
            <td className="table-cell-email">
                {email}
            </td> 
            <td>
                {score} [{time}s]
            </td> 
        </tr>
        </Fragment>
    )
}

export default ScoreTableItem;