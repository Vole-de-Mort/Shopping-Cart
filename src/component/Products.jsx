import '../styles/NavBar.css';
import PropTypes from 'prop-types';

export default function Products(props) {
  const produit = props.product;

  const handleClick = (produit) =>{
    props.addToCart(produit)
  }

  return (
    <div className='produit'>
      <img src={produit.image} alt={produit.description} />
      <div>{produit.title}</div>
      <div>Rating : {produit.rating.rate} / 10</div>
      <div>id: {produit.id}</div>
      <div className='down'>
        <div>{produit.price} $</div>
        <button type='button' onClick={() => handleClick(produit)}>
          Add to the card
        </button>
      </div>
    </div>
  );
}
Products.propTypes = {
  id: PropTypes.number,
  product: PropTypes.object,
  addToCart: PropTypes.func,
};
