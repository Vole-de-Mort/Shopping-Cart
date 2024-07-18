import { Link } from 'react-router-dom';
import Products from '../component/Products';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/shop.css';
import ShoppingBtn from '../component/ShoppingBtn';
import Loading from '../component/Loading';
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart, existingProduct } = useContext(CartContext);

  useEffect(() => {
    // Fetch products from external API
    fetch('https://fakestoreapi.com/products?limit=11')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return(
      <Loading />
    );
  }
  console.log(products);
  if (existingProduct) {
    console.log('Product already exists in the cart');
    //class should be added for coloring purposes
  }
  return (
    <>
      <div className='shop'>
        <div className='products'>
          {products.map((product, id) => {
            return (
              <Products key={id} product={products[id]} addToCart={addToCart} />
            );
          })}
        </div>
        <Link to='/'>
          <ShoppingBtn text='Back Home' Class='backHomeBtn' />
        </Link>
      </div>
    </>
  );
};
export default Shop;
