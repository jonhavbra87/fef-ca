import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { FiX } from 'react-icons/fi';
import { useState } from 'react';
import Cart from '../Cart';
import NavLinks from '../NavLinks';
import { Link } from 'react-router-dom';
import { NavMenu } from '../../styles/NavMenu';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-end w-full gap-x-4 md:space-x-6">
      {/* Cart Icon - Synlig hele tiden, både på mobil og desktop */}
      <Link to="/cart" className="relative text-cream text-2xl cursor-pointer">
        <span className="sr-only">Cart</span>
        <Cart />
      </Link>

      {/* Hamburger Icon - Kun synlig på mobil */}
      <div 
      className={`text-cream text-3xl cursor-pointer md:hidden transform transition-transform duration-400 ${
        isOpen ? 'rotate- scale-110' : ''
      }`}
      onClick={toggleMenu}
    >
        {isOpen ? <FiX /> : <HiOutlineMenuAlt2 />}
      </div>

      {/* Navigation Menu - viser seg når `isOpen` er true eller på desktop */}
    <NavMenu isOpen={isOpen}>
        <NavLinks />
      </NavMenu>
    </div>
  );
}

export default NavBar;
