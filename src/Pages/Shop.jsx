import { Link } from 'react-router-dom';
import Products from '../component/Products';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    // Fetch products from external API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className='loading'>Loading ...</div>;
  }
  console.log(products);

  return (
    <>
      <div className='shop'>
        <h1>Shop</h1>
        <div className='products'>
          {products.map((product, id) => {
            return <Products key={id} product={products[id]} addToCart={addToCart}/>;
          })}
        </div>
        <Link to='/'>Back Home</Link>
      </div>
    </>
  );
};
export default Shop;
