import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoyer les données de connexion au backend
    axios.post('/api/auth/login', { email, password })
      .then((response) => {
        // Traiter la réponse du backend si nécessaire
        console.log(response.data);
      })
      .catch((error) => {
        // Gérer les erreurs
        console.error(error);
      });
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: 'grey' }}>
      <div>
        <h1>Connexion</h1>
        <form onSubmit={handleSubmit}>
          <label className="form-label">
            Email:
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label className="form-label">
            Mot de passe:
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button className="btn btn-primary" type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
