import React from "react"
import "./index.scss"

export interface IInput {
    name:string
    value:string
    action:(str:any)=>void
}

const Input: React.FunctionComponent<IInput> = ({name,value,action})=> {
    
    return (
        <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">{name}</label>
            <div className="col-sm-10">
                <input type="text" className="form-control" value={value}  onChange={(e)=>action(e.target.value)}/>
            </div>
        </div>
    )
}
export default Input;