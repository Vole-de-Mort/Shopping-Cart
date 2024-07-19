import PropTypes from 'prop-types';

export default function Recette(props) {
  const initialPrice = props.totalPrice;
  const shippingPrice = initialPrice*0.08;
  const tax =  initialPrice*0.2;
  const total = tax + shippingPrice + initialPrice
  return (
    <>
      <div className='recette'>
        <div>Payment</div>
        <div>Subtotal: ${initialPrice.toFixed(2)}</div>
        <div>Shipping: ${shippingPrice.toFixed(2)}</div>
        <div>Sales tax: ${tax.toFixed(2)}</div>
        <div>Total: ${total.toFixed(2)}</div>
      </div>
    </>
  );
}

Recette.propTypes = {
  totalPrice: PropTypes.number,
};
