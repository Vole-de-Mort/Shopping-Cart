import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Recette from './Recette';

export default function Cart() {
  const [visible, setVisible] = useState(true);
  // const [totalPrice, setTotalPrice] = useState(0);
  const { cart, pieceNumber, removeFromCart, cleanCart } =
    useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemCounts, setItemCounts] = useState(
    cart.reduce((acc, item) => {
      acc[item.id] = 1; // Initialize counts to 1 for each item
      return acc;
    }, {})
  );

  const handleIncrement = (item) => {
    const id = item.id;
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] + 1,
    }));
    //setTotalPrice((prevPrice) => prevPrice + item.price);
  };

  const handleDecrement = (id) => {
    if (itemCounts[id] > 0) {
      setItemCounts((prevCounts) => ({
        ...prevCounts,
        [id]: prevCounts[id] - 1,
      }));
    }
  };

  const sumItem = (id) => {
    return itemCounts[id] * cart.find((item) => item.id === id).price;
  };
  useEffect(() => {
    if (cart.length === 0) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    const total = cart.reduce((sum, item) => {
      return sum + item.price * itemCounts[item.id];
    }, 0);
    setTotalPrice(total);
  }, [cart, itemCounts]);

  return (
    <div className='cart'>
      <h1>Cart</h1>
      <div className='items'>
        {cart.map((item) => {
          return (
            <>
              <div key={item.id} className='item'>
                <img src={item.image} alt="" />

                <div className='quantity'>
                  <button
                    type='button'
                    onClick={() => handleDecrement(item.id)}
                  >
                    -
                  </button>
                  <div id={item.id}>{itemCounts[item.id]}</div>
                  <button type='button' onClick={() => handleIncrement(item)}>
                    +
                  </button>
                </div>
                <div className='price'>{sumItem(item.id)}$</div>
                <button type='button' onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </>
          );
        })}
      </div>
      <div className='itemsSelected'>items selected : {pieceNumber}</div>
      <Link to='/shop'>Keep Shopping</Link>

      {visible && (
        <button type='button' className='hidden' onClick={cleanCart}>
          Clear Cart
        </button>
      )}

      <Recette text='helo' totalPrice={totalPrice} />
    </div>
  );
}
