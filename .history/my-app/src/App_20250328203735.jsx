// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Menu from './components/Menu';
import AboutUs from './pages/AboutUs';
import OrderPage from './components/OrderPage';
import Cart from './components/Cart';
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/order" element={<OrderPage />} /> 
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
