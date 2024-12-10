import { Link } from 'react-router-dom';
import Logo from '../../assets/eCom_logo.svg';
import NavBar from '../NavBar';
import Cart from '../Cart';

function Header() {
  return (
    <header className="bg-navigation w-full flex items-center fixed top-0 justify-between p-4 h-16 shadow-md">
      {/* Left: Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img src={Logo} alt="eCom logo" className="h-14" />
        </Link>
      </div>
      <Cart />
      {/* Right: Navbar and Cart */}
      <NavBar />
    </header>
  );
}

export default Header;
