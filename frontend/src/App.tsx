import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import CarList from './pages/carList/CarList'
import Homepage from './pages/homepage/Homepage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/home' element={<Homepage />} />
        <Route path='/car-list' element={<CarList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
