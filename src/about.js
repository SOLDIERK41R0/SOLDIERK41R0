// About.js

import React from 'react';
import Layout from './layout.js'; // Asegúrate de que la ruta sea correcta y coincida con el nombre del archivo
import Info from './Info';
import Footer from './components/footer';


function About() {
  return (
    <div className="container">
      <Layout />
      <Info />
      <Footer />
    </div>
  );
}

export default About;

/*

import React, { useState, useEffect } from 'react';
import  Layout  from './layout.js';
import Footer from './components/footer';
import InfoContent from '/InfoContent';

function About() {
  const [info, setInfo] = useState('');

  useEffect(() => {
    // Función para leer el archivo 'info.txt'
    const fetchInfo = async () => {
      try {
        const response = await fetch('./info.txt');
        const data = await response.text();
        setInfo(data);
      } catch (error) {
        console.error('Error al leer el archivo info.txt', error);
      }
    };

    // Llama a la función para obtener y actualizar la información
    fetchInfo();
  }, []);

  return (
    <div className="container">
      <Layout />
      <div>
        {info && <p>{info}</p>}
        {}
      </div>
      <Footer />
    </div>
  );
}

export default About;



function About () {
    return (
       
      <div className="container">
        <Layout />
        
        <Footer />
      </div>
      )
}

export default About;
*/