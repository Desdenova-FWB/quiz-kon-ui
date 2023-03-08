import React from "react";
import { observer } from "mobx-react";
import { IStudent } from "../../Store/User";
import Button from "./../../Common/Button/Button";

export interface IHomePage {
  user: IStudent;
}

const HomePage: React.FunctionComponent<IHomePage> = ({ user }) => {
  return (
    <div>
      <h1>Wellcome</h1>
      <Button name="To Score" action={() => user.changePage("score")} />
      <Button name="To User info" action={() => user.changePage("user-info")} />
    </div>
  );
};
export default observer(HomePage);
