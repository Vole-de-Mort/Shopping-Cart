import '../styles/shop.css';
import PropTypes from 'prop-types';

export default function Products(props) {
  const produit = props.product;

  const handleClick = (produit) => {
    props.addToCart(produit);
  };

  return (
    <div className='produit'>
      <div className='produit-image' style={{ backgroundImage: `url(${produit.image})` }}></div>
      <div className='info'>
        <div>{produit.title}</div>
        <div className='down'>
          <div>{produit.price} $</div>
          <button type='button' onClick={() => handleClick(produit)}>
            Add to the card
          </button>
        </div>
      </div>
    </div>
  );
}
Products.propTypes = {
  id: PropTypes.number,
  product: PropTypes.object,
  addToCart: PropTypes.func,
};
