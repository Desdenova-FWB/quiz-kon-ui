import axios from "axios";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import Button from "../../Common/Button/Button";
import Input from "../../Common/Input/Input";
import Student from "../../Store/User";
import _Global from "../../Utils/globalProps";

import tiacLogo from "../../assets/img/logo/tiac_white_640_hor.png";

export interface IUserInfo {}

const UserInfo: React.FunctionComponent<IUserInfo> = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);

  const submit = () => {
    console.log("point");
    axios.post(`${_Global.BE_URL}/userResult/create/`,{ name: name, email: email, tel: tel}).then((res)=>{
      Student.editUser({ ...res.data.userResult, page: "quiz" });
    });
  };
  useEffect(() => {
    if (name !== "" && email !== "" && tel !== "") setCanSubmit(true);
    else setCanSubmit(false);
  }, [name, email, tel, canSubmit]);
  return (
    <>
      <div className="small-logo">
        <img src={tiacLogo}></img>
      </div>

      <p className="mb-5 text-white">Upiši svoje podatke kako bi započeo kviz.</p>

      <form className="mt-5">
        <Input name="Ime i prezime" value={name} type="text" action={setName} />
        <Input name="E-mail" value={email} type="email" action={setEmail} />
        <Input name="Kontakt telefon" type="number" value={tel} action={setTel} />
      </form>

      <p className="mb-3 text-white">Svi lični podaci biće korišćeni u svrhu najave događaja u kompaniji TIAC.</p>

      <div className="d-grid gap-2">
        <Button
          isActive={canSubmit}
          name="Kviz"
          action={() => submit()}
          classes="btn btn-light"></Button>
      </div>
    </>
  );
};
export default observer(UserInfo);
