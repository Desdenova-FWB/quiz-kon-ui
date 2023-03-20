import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './Application';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div id="app-container" className="container text-center">
      <div className="row justify-content-md-center full-height">
        <div className="col-lg-6">
          <Application/>
        </div>
      </div>
      <div id="footer">
        <a href="http://www.tiacgroup.com/" target="_blank">
          <img src="http://www.tiacgroup.com/wp-content/uploads/2022/09/icons8-website-64.png" alt="web" width="32" height="32"></img>
        </a>
        <a href="https://www.linkedin.com/company/tiac-d-o-o-/" target="_blank">
          <img src="http://www.tiacgroup.com/wp-content/uploads/2022/09/icons8-linkedin-64.png" alt="linkedin" width="32" height="32"></img>
        </a>
        <a href="https://www.instagram.com/tiac.group/" target="_blank">
          <img src="http://www.tiacgroup.com/wp-content/uploads/2022/09/icons8-instagram-64.png" alt="instagram" width="32" height="32"></img>
        </a>
        <a href="https://www.facebook.com/TIACgroup" target="_blank">
          <img src="http://www.tiacgroup.com/wp-content/uploads/2022/09/icons8-facebook-64.png" alt="facebook" width="32" height="32"></img>
        </a>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();