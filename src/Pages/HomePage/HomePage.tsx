import React from "react";
import { observer } from "mobx-react";
import { IStudent } from "../../Store/User";
import { createTheme } from '@mui/material/styles';


import './index.scss';
import {Button} from "@mui/material";

export interface IHomePage {
  user: IStudent;
}

const HomePage: React.FunctionComponent<IHomePage> = ({ user }) => {

  return (
    <div className="content">
      <h1 className="title">Dobro došli</h1>

      <div className="button-group" onClick={() => user.changePage("score")}>
        <Button className="button-color-2" variant="contained" >
          Rezultati
        </Button>
        <Button className="button-color-1" variant="contained" onClick={() => user.changePage("user-info")}>
          Informacije
        </Button>
        {/* <Button name="To Score" action={() => user.changePage("score")} classes="btn btn-primary" />
        <Button name="To User info" action={() => user.changePage("user-info")} classes="btn btn-primary" /> */}
      </div>
    </div>
  );
};
export default observer(HomePage);
