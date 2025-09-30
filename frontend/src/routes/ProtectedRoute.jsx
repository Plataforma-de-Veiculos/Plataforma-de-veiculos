import React from 'react';
import { Navigate } from 'react-router-dom';

// Este componente funciona como um "invólucro" ou "wrapper"
const ProtectedRoute = ({ children }) => {
  // Verificamos se o token existe no localStorage
  const token = localStorage.getItem('authToken');

  // Se não houver token, redirecionamos para a página de login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Se o token existir, renderizamos o componente filho (a página que estamos protegendo)
  return children;
};

export default ProtectedRoute;