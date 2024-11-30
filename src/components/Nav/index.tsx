import { Link } from 'react-router-dom';
import NavContainer from '../../styles/NavContainer';
import Cart from '../Cart';

function Nav() {
  return (
    <NavContainer>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/cart">
      <div className='hidden md:block'>
      <Cart />
      
      </div>
      </Link>
    </NavContainer>
  );
}

export default Nav;
