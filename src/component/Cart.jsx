import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart, pieceNumber, removeFromCart } = useContext(CartContext);

  const [itemCounts, setItemCounts] = useState(
    cart.reduce((acc, item) => {
      acc[item.id] = 0; // Initialize counts to 0 for each item
      return acc;
    }, {})
  );

  const handleIncrement = (id) => {
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

  return (
    <div className='cart'>
      <h1>Cart</h1>
      <div className='items'>
        {cart.map((item) => {
          return (
            //lena lazem n7ottou ko item fel 9offa kifech bch yo4hor
            // lazem kol item yebda andou remove btn
            // el btn aka mel CartContext hya el general !
            <>
              <div key={item.id} className='item'>
                <h1>{item.id}</h1>

                <div className='quantity'>
                  <button
                    type='button'
                    onClick={() => handleDecrement(item.id)}
                  >
                    -
                  </button>
                  <div id={item.id}>{itemCounts[item.id]}</div>
                  <button
                    type='button'
                    onClick={() => handleIncrement(item.id)}
                  >
                    +
                  </button>
                </div>
                <div className='totalPrice'>{sumItem(item.id)}$</div>
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
      {/*
      lena laem componenst bch ye7seb el recette el koll
      */}
    </div>
  );
}
