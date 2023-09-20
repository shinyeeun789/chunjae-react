import React from 'react';
import Header from './Header';
import Contents from './Contents';
import Footer from './Footer';

const Home = () => {
  return (
    <div className='App'>
        <Header/>
        <Contents/>
        <Footer/>
    </div>
  )
}

export default Home