import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import CarList from './pages/carList/CarList';

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path='/car-list' element={<CarList />} />

    </Routes>
    </BrowserRouter>

  );
}

export default App;
