import { Link } from 'react-router-dom';
import Logo from '../../assets/eCom_logo.svg';
import NavBar from '../NavBar';
import Cart from '../Cart';

function Header() {
  return (
    <header className="bg-primary w-full flex items-center fixed top-0 justify-between p-4 h-20 shadow-md z-50">
      {/* Left: Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img src={Logo} alt="eCom logo" className="h-14" />
        </Link>
      </div>
      <div className='flex flex-row gap-3 items-center'>
      <Cart />
      <NavBar />

      </div>
      {/* Right: Navbar and Cart */}
    </header>
  );
}

export default Header;
