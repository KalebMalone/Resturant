import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Menu from './components/Menu';
import AboutUs from './pages/AboutUs';
import OrderPage from './components/OrderPage';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]); // Managing cart state at the top level

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu cart={cart} setCart={setCart} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/order" element={<OrderPage cart={cart} setCart={setCart} />} /> 
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
