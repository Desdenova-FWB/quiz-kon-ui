import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './Application';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './global.scss';
import { url } from 'inspector';
import background from './assets/img/background/medved-pozadina-compressed.jpg'
import logo from './assets/img/logo/tiac.png'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className='center-display'>
      <img className='body-image' alt='background' src={background}/>
      <img className='body-logo' alt='logo' src={logo}/>
      <Application/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
