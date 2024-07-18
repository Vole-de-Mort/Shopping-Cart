import PropTypes from 'prop-types';
export default function ShoppingBtn({text}){
  return (
    <div className="shoppingBtn">
      {text}
    </div>
  )
}
ShoppingBtn.propTypes = {
  text: PropTypes.string,
}