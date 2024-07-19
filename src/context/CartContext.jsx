import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

// Create the Context
export const CartContext = createContext();

// Create a Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [pieceNumber, IncreasingPieceNumber] = useState(0);
  const [existingProduct, setExiste] = useState(false);

  const addToCart = (product) => {
    const existe = cart.find((item) => item.id === product.id);
    if (existe) {
      setExiste(true);
    } else {
      setCart((prevCart) => [...prevCart, product]);
      IncreasingPieceNumber((q) => q + 1);
    }
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    IncreasingPieceNumber((q) => q - 1);
  };

  const cleanCart = () => {
    setCart([]);
    IncreasingPieceNumber(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        pieceNumber,
        removeFromCart,
        existingProduct,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.object,
};
