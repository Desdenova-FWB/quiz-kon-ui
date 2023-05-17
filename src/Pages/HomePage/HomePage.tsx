import React from "react";
import { observer } from "mobx-react";
import { IStudent } from "../../Store/User";
import Button from "./../../Common/Button/Button";

import logo from "./../../assets/img/logo/tiac_mi_logo.png";

import './index.scss';

export interface IHomePage {
  user: IStudent;
}

const HomePage: React.FunctionComponent<IHomePage> = ({ user }) => {
  return (
    <div className="home-container">
      <div id="logo">
        <img src={logo}></img>
      </div>

      <div className="home-buttons">
        <Button name="Kviz" action={() => user.changePage("user-info")} classes="btn btn-light" />
        <Button name="Rang lista" action={() => user.changePage("score")} classes="btn btn-light" />
      </div>
    </div>
  );
};
export default observer(HomePage);
