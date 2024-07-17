import PropTypes from 'prop-types';

export default function Recette(props){
  return (
    <>
    <h1>recette</h1>
    {props.totalPrice}
    </>
  )
}

Recette.propTypes = {
  totalPrice: PropTypes.number,
}