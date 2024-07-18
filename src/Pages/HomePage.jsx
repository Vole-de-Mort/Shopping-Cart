import { Link } from 'react-router-dom';
import ShoppingBtn from '../component/ShoppingBtn';

const HomePage = () => {
  return (
    <>
    
      <div className='container'>
        <Link to='/shop'>
          <ShoppingBtn text='Shop Now' />
        </Link>
      </div>
    </>
  );
};
export default HomePage;
