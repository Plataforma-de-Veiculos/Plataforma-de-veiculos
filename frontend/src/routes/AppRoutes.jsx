import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import RegisterPage from '../pages/RegisterPage';
// import LoginPage from '../pages/LoginPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<h1>Página de Login</h1>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<h1>Home Page</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;