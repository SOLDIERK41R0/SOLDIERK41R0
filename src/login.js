import React from 'react';
import Layout from './layout.js'; // Asegúrate de que la ruta sea correcta y coincida con el nombre del archivo
import Footer from './components/footer';
import Loggin from './loggin';

function Login() {
  return (
    <div className="container">
      <Layout />
      <Loggin />
      <Footer />
    </div>
  );
}

export default Login;