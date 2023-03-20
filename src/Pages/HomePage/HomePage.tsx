import React from "react";
import { observer } from "mobx-react";
import { IStudent } from "../../Store/User";
import Button from "./../../Common/Button/Button";

import tiacLogo from "./../../assets/img/logo/tiac_white_640_hor.png";

import './index.scss';

export interface IHomePage {
  user: IStudent;
}

const HomePage: React.FunctionComponent<IHomePage> = ({ user }) => {
  return (
    <>
      <div id="logo">
        <img src={tiacLogo}></img>
      </div>

      <div className="d-grid gap-4 mt-5">
        <Button name="Kviz" action={() => user.changePage("user-info")} classes="btn btn-light" />
        <Button name="Rang lista" action={() => user.changePage("score")} classes="btn btn-light" />
      </div>
    </>
  );
};
export default observer(HomePage);
