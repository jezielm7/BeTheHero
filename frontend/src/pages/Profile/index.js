import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import { FiPower } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="logo"/>

        <span>Welcome, ONG</span>

        <Link className="button" to="/incidents/new">Register new case</Link>
        <button type="button" >
          <FiPower size={18} color="#e02041" />
        </button>
      </header>
    </div>
  );
}
