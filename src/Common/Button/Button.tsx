import React from "react"
import "./index.scss"

export interface IButton {
    name:string
    isHidden?:boolean
    isActive?:boolean
    action:()=>void
}

const Button: React.FunctionComponent<IButton> = ({name,isHidden = false,isActive=true,action})=> {

    let classes = [].join(" ")
    return (
        <div className={classes}>
           <button onClick={()=>action()} disabled={!isActive}>
                {name}
           </button>
        </div>
    )
}
export default Button