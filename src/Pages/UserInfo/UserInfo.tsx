import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import Button from "../../Common/Button/Button";
import Input from "../../Common/Input/Input";
import Student from "../../Store/User";

export interface IUserInfo {}

const UserInfo: React.FunctionComponent<IUserInfo> = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);

  const submit = () => {
    console.log("point");
    Student.editUser({ name: name, email: email, tel: tel, page: "quiz" });
  };
  useEffect(() => {
    if (name !== "" && email !== "" && tel !== "") setCanSubmit(true);
    else setCanSubmit(false);
  }, [name, email, tel, canSubmit]);
  return (
    <>
      <h1 className="mt-3 mb-5">User info</h1>

      <form className="mt-5">
        <Input name="Name" value={name} action={setName} />
        <Input name="Email" value={email} action={setEmail} />
        <Input name="Telefon" value={tel} action={setTel} />
      </form>

      <div className="d-grid gap-2">
        <Button
          isActive={canSubmit}
          name="Start quiz"
          action={() => submit()}
          classes="btn btn-primary"></Button>
      </div>
    </>
  );
};
export default observer(UserInfo);
