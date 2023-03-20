import React from "react"
import "./index.scss"

import { ArrowClockwise } from 'react-bootstrap-icons';

export interface IButton {
    name:string
    isHidden?:boolean
    isActive?:boolean
    action:()=>void
    classes?:string
    isIcon?:boolean
    icon?:string
}

const Button: React.FunctionComponent<IButton> = ({name,isHidden = false,isActive=true,action,classes="",isIcon=false,icon=""})=> {

    if (!isIcon) {
        return (
            <button type="button" className={classes} onClick={()=>action()} disabled={!isActive}>{name}</button>
        )
    }

    return <span className={classes} onClick={()=>action()}><ArrowClockwise fontSize={45} color="white" /></span>
}
export default Button