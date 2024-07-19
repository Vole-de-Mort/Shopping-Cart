import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Recette from './Recette';
import ShoppingBtn from '../component/ShoppingBtn';
import '../styles/Cart.css';
import { v4 as uuidv4 } from 'uuid';

export default function Cart() {
  const [visible, setVisible] = useState(true);
  const [emtyCart, setEmptyCart] = useState(true);
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
      setEmptyCart(true);
    } else {
      setVisible(true);
      setEmptyCart(false);
    }

    const total = cart.reduce((sum, item) => {
      return sum + item.price * itemCounts[item.id];
    }, 0);
    setTotalPrice(total);
  }, [cart, itemCounts]);

  if (emtyCart) {
    return (
      <div className='box'>
        <div>No items in your cart yet !</div>
        <Link to='/shop'>
          <ShoppingBtn text='Shop Now' Class='asd' />
        </Link>
      </div>
    );
  }

  return (
    <div className='cart'key={uuidv4()}>
      <div className='items'key={uuidv4()}>
        {cart.map((item) => {
          return (
            <>
              <div key={item.id} className='item'>
                <div
                  key={uuidv4()}
                  className='produit-image-cart'
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className='sous-container' key={uuidv4()}>
                  <div className='item-title' key={uuidv4()}>
                    {item.title}
                  </div>
                  <div className='price' key={uuidv4()}>
                    {sumItem(item.id).toFixed(2)}$
                  </div>
                  <div className='subContainer' key={uuidv4()}>
                    <div className='quantity' key={uuidv4()}>
                      <button
                        key={uuidv4()}
                        type='button'
                        onClick={() => handleDecrement(item.id)}
                      >
                        -
                      </button>
                      <div id={item.id} className='q' key={uuidv4()}>
                        {itemCounts[item.id]}
                      </div>
                      <button
                        key={uuidv4()}
                        type='button'
                        onClick={() => handleIncrement(item)}
                      >
                        +
                      </button>
                    </div>

                    <div
                      key={uuidv4()}
                      className='removeBtn'
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className='sidePanel'>
        <div className='itemsSelected'>{pieceNumber} items</div>
        <Recette totalPrice={totalPrice} />
        <div className='cartBtns'>
          <a
            href='https://i1.sndcdn.com/artworks-000136269787-emjhqq-t500x500.jpg'
            target='_blank'
          >
            <ShoppingBtn text='Check out' Class='sideBtn checkOut' />
          </a>

          <Link to='/shop'>
            <ShoppingBtn text='Keep Shopping' Class='keepShoppingBtn sideBtn' />
          </Link>
          {visible && (
            <button
              type='button'
              className='hidden sideBtn'
              onClick={cleanCart}
            >
              Clear Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
