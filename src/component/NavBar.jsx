import '../styles/NavBar.css';
import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <div className='navBar'>
      <div className='name'> 
        <Link to='/'>ChicWardrobe</Link>
      </div>
      <div className='links'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/shop'>Shop</Link>
          </li>
          <li>
            <Link to='/cart'>Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
