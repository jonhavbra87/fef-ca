import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { FiX } from 'react-icons/fi';
import Cart from '../Cart';
import NavLinks from '../NavLinks';
import { Link } from 'react-router-dom';
import { NavMenu } from '../../styles/NavMenu';
import useMenu from '../../hooks/useMenu';
import { HamburgerIcon } from '../../styles/HamburgerIcon';

function NavBar() {
    const { isOpen, toggleMenu, closeMenu, menuRef } = useMenu();
  
  return (
    <div ref={menuRef} className="flex items-center justify-end w-full gap-x-4 md:space-x-6">
      {/* Cart Icon - Synlig hele tiden, både på mobil og desktop */}
      <Link to="/cart" className="relative text-cream text-2xl cursor-pointer" onClick={closeMenu}>
        <span className="sr-only">Cart</span>
        <Cart />
      </Link>

      {/* Hamburger Icon - Kun synlig på mobil */}
      <HamburgerIcon 
      isOpen={isOpen}

      onClick={toggleMenu}
    >
        {isOpen ? <FiX /> : <HiOutlineMenuAlt2 />}
      </HamburgerIcon>

      {/* Navigation Menu - viser seg når `isOpen` er true eller på desktop */}
    <NavMenu isOpen={isOpen}>
        <NavLinks closeMenu={closeMenu} />
      </NavMenu>
    </div>
  );
}

export default NavBar;
