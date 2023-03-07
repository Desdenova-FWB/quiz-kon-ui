import { observer } from "mobx-react";
import React, { useState } from "react"
import Button from "../../Common/Button/Button";
import Input from "../../Common/Input/Input";
import Student from "../../Store/User";

export interface IUserInfo {}

const UserInfo :React.FunctionComponent<IUserInfo> = props=>{

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    
    const [tel , setTel] = useState("");

    const submint = ()=>{
        console.log("point")
        Student.editUser(
            {name:name,
            email:email,
            tel:tel,
            page:"quiz"
            });
    }
return (
    <div>

        <Input name="Name" value={name} action={setName} />
        <Input name="Email" value={email} action={setEmail} />
        <Input name="Telefon" value={tel} action={setTel} />

        <Button name="start quizz"action={()=>submint()} />

    </div>
)
}
export default observer(UserInfo);
