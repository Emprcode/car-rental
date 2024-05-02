import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import CarList from './pages/carList/CarList'
import Homepage from './pages/homepage/Homepage'
import Cars from './pages/cars/Cars'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/home' element={<Homepage />} />
        <Route path='/car-list' element={<CarList />} />
        <Route path='add-cars' element={<Cars />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
