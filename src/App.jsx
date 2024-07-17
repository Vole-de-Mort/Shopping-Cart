import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import HomePage from './Pages/HomePage';
import Shop from './Pages/Shop';
import Cart from './component/Cart';
import NavBar from './component/NavBar';
import ErrorPage from './component/ErrorPage';
import { CartProvider } from './context/CartContext';
const App = () => {
  return (
    <CartProvider>
      <React.StrictMode>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' Component={HomePage} />
            <Route path='/shop' Component={Shop} />
            <Route path='/cart' Component={Cart} />
            <Route path='*' Component={ErrorPage} />
          </Routes>
        </Router>
      </React.StrictMode>
    </CartProvider>
  );
};

export default App;
