import { observer } from "mobx-react";
import React, { useEffect, useState } from "react"
import Button from "../../Common/Button/Button";
import Input from "../../Common/Input/Input";
import Student from "../../Store/User";

export interface IUserInfo {}

const UserInfo :React.FunctionComponent<IUserInfo> = props=>{
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [tel , setTel] = useState("");
    const [canSubmit,setCanSubmit] = useState(false)

    const submint = ()=>{
        console.log("point")
        Student.editUser(
            {name:name,
            email:email,
            tel:tel,
            page:"quiz"
            });
    }
    useEffect (()=>{
        if (name !== "" && email !== "" &&  tel !== "")
            setCanSubmit(true)
        else 
            setCanSubmit(false)

    },[name,email,tel,canSubmit])
    return (
        <div>

            <Input name="Name" value={name} action={setName} />
            <Input name="Email" value={email} action={setEmail} />
            <Input name="Telefon" value={tel} action={setTel} />

            <Button isActive={canSubmit} name="start quizz"action={()=>submint()} />

        </div>
    )
}
export default observer(UserInfo);
