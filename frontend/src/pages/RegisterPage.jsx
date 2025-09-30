import React, { useState } from 'react';
import api from '../services/api'; // Importamos nosso serviço de API

const RegisterPage = () => {
  // Criamos "estados" para armazenar os valores de cada campo do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Esta função será chamada quando o formulário for enviado
  const handleSubmit = async (event) => {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página

    try {
      // Montamos o objeto de dados do novo usuário
      const userData = {
        nome,
        email,
        senha,
      };

      // Chamamos o endpoint de cadastro da nossa API
      const response = await api.post('/usuarios', userData);

      console.log('Usuário cadastrado com sucesso!', response.data);
      alert('Cadastro realizado com sucesso!');
      // Aqui, no futuro, redirecionaremos o usuário para a página de login

    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error.response.data);
      alert('Erro no cadastro. Verifique os dados e tente novamente.');
    }
  };

  return (
    <div>
      <h2>Página de Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
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
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default RegisterPage;