import PropTypes from 'prop-types';
export default function ShoppingBtn({ text, Class }) {
  return <div className={Class}>{text}</div>;
}
ShoppingBtn.propTypes = {
  text: PropTypes.string,
  Class: PropTypes.string,
};
