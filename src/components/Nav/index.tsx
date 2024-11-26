import { Link } from 'react-router-dom';
import NavContainer from '../../styles/NavContainer';

function Nav() {
  return (
    <NavContainer>
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/cart">Cart</Link>
  </NavContainer>
  );
}

export default Nav;
