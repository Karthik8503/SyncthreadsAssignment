// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard';
import MapView from './components/MapView';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/map" element={<MapView />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;