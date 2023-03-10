import React from "react"
import "./index.scss"


const ScoreTableHeader: React.FunctionComponent = () =>{

    return(
        <tr>
            <th>
                Igrac
            </th>
            <th>
                Email
            </th>
            <th>
                Rezltat
            </th>
            <th>
                Vreme [s]
            </th>
        </tr>
    )

}
export default ScoreTableHeader;