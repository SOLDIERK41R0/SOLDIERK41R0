import React from 'react';
import  Layout  from './layout';
import Homee from './homee.js';
import Footer from './components/footer';
import './home.css';

function Home () {
    return (
       
      <div className="container">
        <Layout />
        <Homee />
        <Footer />
      </div>
      )
}

export default Home;
