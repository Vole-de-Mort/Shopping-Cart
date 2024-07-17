import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

// Create the Context
export const CartContext = createContext();

// Create a Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [pieceNumber, IncreasingPieceNumber] = useState(0);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    IncreasingPieceNumber((q) => q + 1);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    IncreasingPieceNumber((q) => q - 1);
  };

  // athi lazsemha trajja3 a function for cleaning the cart
  // and a function for removing item's from the cart
  return (
    <CartContext.Provider value={{ cart, addToCart, pieceNumber, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.object,
};
