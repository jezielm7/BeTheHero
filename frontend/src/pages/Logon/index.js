import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="logo"/>

        <form>
          <h1>Make your logon</h1>

          <input placeholder="Your ID"/>

          <button type="submit" className="button" >Enter</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            I don't have register
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes"/>
    </div>
  );
}
