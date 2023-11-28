import React from 'react';
import './App.css';
import MainConten from './components/mainContent';
import Footer from './components/footer';
import  Layout  from './layout.js'
//import Header from './components/header.js';

function Store () {
    return (
       
      <div className="container">
        <Layout />
        <MainConten />
        <Footer />
      </div>
      )
}

export default Store;
