import React from "react"
import "./index.scss"


const ScoreTableHeader: React.FunctionComponent = () =>{

    return(
        <tr>
            <th>#</th>
            <th className="table-cell-email">E-mail</th>
            <th>Rezultat</th>
        </tr>
    )

}
export default ScoreTableHeader;