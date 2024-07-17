import PropTypes from 'prop-types';

export default function Products(props){
  return (
    <p>Produit {props.id}</p>
  )
}
Products.propTypes = {
  id: PropTypes.number
}