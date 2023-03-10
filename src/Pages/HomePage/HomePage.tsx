import React from "react";
import { observer } from "mobx-react";
import { IStudent } from "../../Store/User";
import Button from "./../../Common/Button/Button";

import './index.scss';

export interface IHomePage {
  user: IStudent;
}

const HomePage: React.FunctionComponent<IHomePage> = ({ user }) => {
  return (
    <>
      <h1 className="mt-3 mb-5">Wellcome</h1>

      <div className="d-grid gap-2 mt-5">
        <Button name="To Score" action={() => user.changePage("score")} classes="btn btn-primary" />
        <Button name="To User info" action={() => user.changePage("user-info")} classes="btn btn-primary" />
      </div>
    </>
  );
};
export default observer(HomePage);
