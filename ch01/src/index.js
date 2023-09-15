import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test4 from './Test4';
import Test5 from './Test5';
import Test6 from './Test6';
import Test7 from './Test7';
import Test8 from './Test8';
import Test9 from './Test9';
import reportWebVitals from './reportWebVitals';

// 3. Test1 컴포넌트 추가
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Test4 />
    <Test5 />
    <hr/>
    <Test5 irum="김천재" age="20" addr="가산동" />
    <hr/>
    <Test5 irum="이이름" age="25" addr="LA" />
    <hr/>
    <Test6 irum="박이름" age="30" addr="가경동" />
    <Test7 irum="최이름" age="58" addr="가나다"/>
    <Test8 />
    <Test9 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
