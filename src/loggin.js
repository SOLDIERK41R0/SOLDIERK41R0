import React from 'react';
import { Link } from 'react-router-dom';
import './loggin.css'; // Importa el archivo CSS

function Loggin() {
    return (
      <div className="container">
        <div className="formContainer">
          <h2>Login</h2>
          <form>
            <div className="formGroup">
              <label>
                Usuario:____
                <input type="text" name="username" />
              </label>
            </div>
            <div className="formGroup">
              <label>
                Contraseña:_
                <input type="password" name="password" />
              </label>
            </div>
            <Link to="/store">
              <button type="submit" className="button">
                Log in
              </button>
            </Link>
          </form>
          <p style={{ marginTop: '10px' }}>
            Don't have an account? <Link to="/">Register</Link>
          </p>
        </div>
      </div>
    );
  }
  
  export default Loggin;





/*
import React from 'react';
import { Link } from 'react-router-dom';

function Loggin() {
  return (
    <div className="container" style={{ backgroundColor: '#272b34', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '300px', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
        <h2>Login</h2>
        <form>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <br />
          <Link to="/store"> <button type="submit" style={{ backgroundColor: '#fe8033', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Log in
          </button></Link>
        </form>
        <p style={{ marginTop: '10px' }}>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Loggin;
*/