import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import Header from "./components/header";
import { BrowserRouter } from 'react-router-dom' ;
//import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  
);

//document.getElementById('root')