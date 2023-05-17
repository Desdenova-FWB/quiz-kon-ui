import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './Application';
import reportWebVitals from './reportWebVitals';

import websiteImage from './assets/img/footer/icons8-website-64.png';
import linkedinImage from './assets/img/footer/icons8-linkedin-64.png';
import instagramImage from './assets/img/footer/icons8-instagram-64.png';
import facebookImage from './assets/img/footer/icons8-facebook-64.png';

import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>

    <div id="app-container" className="container text-center">
      <div className="row justify-content-md-center full-height">
        <div className="col-lg-6">
          <Application/>
        </div>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();