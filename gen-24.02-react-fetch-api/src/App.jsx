// import { useState } from 'react'
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
// import { products as data } from './data/Product';
import Summary from './component/Summary';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Header from './layout/Header';
import Footer from './layout/Footer';
import DetailSWR from './pages/DetailSWR';



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<DetailSWR />} />
      </Routes>
    </div>
  )
}

export default App;
