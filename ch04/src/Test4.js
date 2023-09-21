//yarn add react-bootstrap bootstrap
import React from 'react';
import Header from './Header.js';
import Contents from './Contents.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';    //bootstrap
import './Common.scss';
const Test4 = () => {
  return (
    <>
        <Header />
        <Contents />
        <Footer />
    </>
  )
}

export default Test4