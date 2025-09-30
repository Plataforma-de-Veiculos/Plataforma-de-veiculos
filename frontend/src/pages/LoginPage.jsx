import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook para redirecionamento
import api from '../services/api';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const loginData = { email, senha };
      const response = await api.post('/login', loginData);

      const { token } = response.data;

      localStorage.setItem('authToken', token);

      console.log('Login bem-sucedido!', token);
      alert('Login realizado com sucesso!');

      navigate('/');

    } catch (error) {
      console.error('Erro ao fazer login:', error.response?.data || error.message);
      alert('Erro no login. Verifique seu e-mail e senha.');
    }
  };

  return (
    <div>
      <h2>Página de Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default LoginPage;