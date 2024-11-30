import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { FiX } from 'react-icons/fi';
import { useState } from 'react';
import Nav from '../Nav';
import Cart from '../Cart';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center space-x-4 md:space-x-6">
      {/* Cart Icon */}
      <div className="relative text-cream text-2xl cursor-pointer md:hidden">
        <Cart />
      </div>

      {/* Hamburger Icon */}
      <div className="text-cream text-3xl cursor-pointer md:hidden" onClick={toggleMenu}>
        {isOpen ? <FiX /> : <HiOutlineMenuAlt2 />}
      </div>

      {/* Navigation Menu - shows when isOpen is true or in desktop mode */}
      <nav
        className={`${
          isOpen ? 'flex flex-col items-start bg-background p-4 absolute top-16 left-0 w-full z-40 gap-4' : 'hidden'
        } md:flex md:flex-row md:static md:gap-6 md:items-center`}
      >
        <Nav />
      </nav>
    </div>
  );
}

export default NavBar;
