import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post('/incidents', data, {
        headers: {
          Authorization: ongId,
        }
      });

      history.push('/profile');
    } catch (err) {
      alert('Register new case failed, try  again!');
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="logo"/>

          <h1>Register new case</h1>
          <p>
            Describe the case in detail to find a hero to solve this.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Back to home
          </Link>
        </section>

        <form onSubmit={handleNewIncident} >
          <input 
            placeholder="Case Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea 
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)} 
            style={{ top: 8, }} 
          />
          <input 
            placeholder="Dollar Value"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
