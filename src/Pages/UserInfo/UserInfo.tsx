import axios from "axios";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import Button from "../../Common/Button/Button";
import Input from "../../Common/Input/Input";
import Student, { IUser } from "../../Store/User";
import _Global from "../../Utils/globalProps";

import "./index.scss";

import tiacLogo from "../../assets/img/logo/tiac_white_640_hor.png";

export interface IUserInfo {}

const UserInfo: React.FunctionComponent<IUserInfo> = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const submit = () => {
    const valid = validate();

    if (!valid) {
      return;
    }

    axios
      .post(`${_Global.BE_URL}/userResult/create/`, {
        name: name,
        email: email,
        tel: tel,
      })
      .then((res) => {
        let retval :IUser= {
          _id: "",
          page: "",
          tel: "",
          name: "",
          email: ""
        }
        retval = res.data.existingUser?res.data.existingUser:res.data.userResult ;

        Student.editUser({ ...retval, page: "quiz" });
      });
  };
  useEffect(() => {
    const valid = validate();
    setCanSubmit(valid);
  }, [name, email, tel, canSubmit]);

  const validate = () => {
    let valid = true;

    if (name === "" || name.split(" ").length < 2) {
      setNameError(true);
      valid = false;
    } else {
      setNameError(false);
    }

    if (
      email === "" ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    ) {
      setEmailError(true);
      valid = false;
    } else {
      setEmailError(false);
    }

    return valid;
  };
  return (
    <>
      <div className="small-logo">
        <img src={tiacLogo}></img>
      </div>

      <p className="mb-5 text-white">
        Upiši svoje podatke kako bi započeo kviz.
      </p>

      <form className="mt-5">
        <Input name="Ime i prezime" value={name} type="text" action={setName} />
        {nameError && (
          <div className="invalid-feedback mb-1">
            Moraš uneti ime i prezime.
          </div>
        )}

        <Input name="E-mail" value={email} type="email" action={setEmail} />
        {emailError && (
          <div className="invalid-feedback mb-1">
            Moraš uneti validan e-mail.
          </div>
        )}

        <Input
          name="Kontakt telefon"
          type="number"
          value={tel}
          action={setTel}
        />
      </form>

      <p className="mb-3 text-white">
        Svi lični podaci biće korišćeni u svrhu najave događaja u kompaniji
        TIAC.
      </p>

      <div className="d-grid gap-2">
        <Button
          isActive={canSubmit}
          name="Kviz"
          action={() => submit()}
          classes="btn btn-light"
        ></Button>
      </div>
    </>
  );
};
export default observer(UserInfo);
