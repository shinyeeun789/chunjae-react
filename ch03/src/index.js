// bootstrap 설치
// yarn으로 설치 | D:\shin\react\ch03 > yarn add react-bootstrap bootstrap
// npm으로 설치  | D:\shin\react\ch03 > npm install react-bootstrap bootstrap

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test from './Test6';
import 'bootstrap/dist/css/bootstrap.css';        // bootstrap 적용시키기
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Test />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
