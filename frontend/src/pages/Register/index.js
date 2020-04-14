import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="logo"/>

          <h1>Register</h1>
          <p>
            Register, enter the platform 
            and help people find the cases 
            of your ONG.
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            I already have an account
          </Link>
        </section>

        <form>
          <input placeholder="ONG name"/>
          <input type="email" placeholder="E-mail" />
          <input placeholder="WhatsApp"/>

          <div className="input-group">
            <input placeholder="City"/>
            <input placeholder="UF" style={{ width: 80 }} />
          </div>

          <button className="button" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
