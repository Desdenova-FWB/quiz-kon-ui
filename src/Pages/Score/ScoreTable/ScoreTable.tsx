import React from "react"
import ScoreTableHeader from "./ScoreTableHeader/ScoreTableHeader";
import ScoreTableItem, { IScoreTableItem } from "./ScoreTableItem/ScoreTableItem";

export interface IScoreTable {
 results : IScoreTableItem[]
}

const ScoreTable : React.FunctionComponent<IScoreTable> = ({results}) =>{

return (
<div>
    <table>
        <thead>
            <ScoreTableHeader/>
        </thead>
        <tbody>
            {
                results.map(item => {
                    return <ScoreTableItem 
                    key={item.ID}
                    ID={item.ID}
                    name={item.name} 
                    email={item.email} 
                    score={item.score} 
                    time={item.time}  />
                })
            }
        </tbody>
    </table>    
</div>

)}

export default ScoreTable;