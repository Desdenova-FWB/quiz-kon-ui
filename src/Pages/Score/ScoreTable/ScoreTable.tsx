import React from "react"
import ScoreTableHeader from "./ScoreTableHeader/ScoreTableHeader";
import ScoreTableItem, { IScoreTableItem } from "./ScoreTableItem/ScoreTableItem";

export interface IScoreTable {
 results : IScoreTableItem[],
 classes?: string
}

const ScoreTable : React.FunctionComponent<IScoreTable> = ({results, classes}) =>{

    const classNames = ['table table-hover table-bordered', classes ?? ''].join(' ');

    return (
        <div>
            <table className={classNames}>
                <thead>
                    <ScoreTableHeader/>
                </thead>
                <tbody> 
                    {
                        results.map(item => {
                            return <ScoreTableItem 
                            key={item.__id}
                            __id={item.__id}
                            name={item.name} 
                            email={item.email} 
                            score={item.score} 
                            time={item.time}  />
                        })
                    }
                </tbody>
            </table>    
        </div>

    )
}

export default ScoreTable;