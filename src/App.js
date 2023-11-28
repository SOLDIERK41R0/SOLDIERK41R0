import React from 'react';
//import './App.css';
//import Header from "./components/header";
//import MainConten from './components/mainContent';
//import Footer from './components/footer';
import { Routes, Route } from 'react-router-dom';
//import Layout from './layout.js'
import Home from './home.js'
import Store from './store.js';
import About from './about.js'
import Login from './login.js';




function App() {
  return (
    //<div className="container">
    // <Header />
    //  <MainConten />
    //  <Footer />
    //</div>

    <div>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path='home' element={<Home />} />
        </Route>
        <Route path='/' element={<Store />} >
          <Route path='store' element={<Store />} />
        </Route>
        <Route path='/' element={<About />} >
          <Route path='about' element={<About />} />
        </Route>
        <Route path='/' element={<Login />} >
          <Route path='login' element={<Login />} />
        </Route>



      </Routes>
    </div>


  )
}

export default App;
