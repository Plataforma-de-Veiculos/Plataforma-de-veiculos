import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

const HomePage = () => {

  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    const fetchVeiculos = async () => {
      try {

        const response = await api.get('/veiculos');
        setVeiculos(response.data); 
        
      } catch (error) {

        console.error("Erro ao buscar veículos:", error);

      }
    };

    fetchVeiculos();

  }, []);

  return (
    <div>
      <h2>Veículos Disponíveis</h2>

      <Link to="/veiculos/novo">
        <button>Cadastrar Novo Veículo</button>
      </Link>

      {veiculos.length > 0 ? (
        <ul>
          {/* O .map() serve para transformar cada objeto de veículo em um item de lista */}
          {veiculos.map(veiculo => (
            <li key={veiculo.id}>
              {veiculo.marca} {veiculo.modelo} - Ano: {veiculo.ano} - Preço: R$ {veiculo.preco}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum veículo encontrado ou carregando...</p>
      )}
    </div>
  );
};

export default HomePage;