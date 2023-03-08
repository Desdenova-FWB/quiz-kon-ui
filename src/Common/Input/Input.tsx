import React from "react"
import "./index.scss"

export interface IInput {
    name:string
    value:string
    action:(str:any)=>void
}

const Input: React.FunctionComponent<IInput> = ({name,value,action})=> {
    
    return (
        <div>
            <label>{name}</label>
            <input type="text" value={value}  onChange={(e)=>action(e.target.value)}/>
        </div>
    )
}
export default Input;