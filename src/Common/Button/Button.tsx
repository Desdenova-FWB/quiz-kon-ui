import React from "react"
import "./index.scss"

export interface IButton {
    name:string
    isHidden?:boolean
    isActive?:boolean
    action:()=>void
    classes?:string
}

const Button: React.FunctionComponent<IButton> = ({name,isHidden = false,isActive=true,action,classes=""})=> {

    return (
        <button type="button" className={classes} onClick={()=>action()} disabled={!isActive}>{name}</button>
    )
}
export default Button