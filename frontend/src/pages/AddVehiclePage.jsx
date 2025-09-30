import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const AddVehiclePage = () => {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [preco, setPreco] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const vehicleData = {
      marca,
      modelo,
      ano: parseInt(ano), 
      preco: parseFloat(preco),
    };

    try {

      await api.post('/veiculos', vehicleData);
      alert('Veículo cadastrado com sucesso!');
      navigate('/');

    } catch (error) {
        
      console.error('Erro ao cadastrar veículo:', error);
      alert('Falha ao cadastrar o veículo. Tente novamente.');
    }
  };

  return (
    <div>
      <h2>Cadastrar Novo Veículo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="marca">Marca:</label>
          <input
            type="text"
            id="marca"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="modelo">Modelo:</label>
          <input
            type="text"
            id="modelo"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="ano">Ano:</label>
          <input
            type="number"
            id="ano"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="preco">Preço:</label>
          <input
            type="number"
            id="preco"
            step="0.01"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar Veículo</button>
      </form>
    </div>
  );
};

export default AddVehiclePage;