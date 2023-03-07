import React from "react"
import { observer } from "mobx-react";
import Button from "../../Common/Button/Button";
import Student from "../../Store/User";
import { IStudent } from "../../Store/User";
export interface IQuiz {
    user:IStudent
}

const Quiz : React.FunctionComponent<IQuiz> = ({user})=>{

    //
    return (
    <div>
        <div>this is Quiz</div>
        <Button name="Go to score" action={()=>Student.changePage("score")} />
    </div>
    );

}
export default observer(Quiz);