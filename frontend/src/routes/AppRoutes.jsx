import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import ProtectedRoute from './ProtectedRoute';
import HomePage from '../pages/Homepage';
import AddVehiclePage from '../pages/AddVehiclePage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/veiculos/novo"
          element={
            <ProtectedRoute>
              <AddVehiclePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;