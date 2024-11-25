import Nav from '../Nav';
import { FaShoppingCart } from 'react-icons/fa';

function Header() {
  return (
    <header className="bg-deepPurple w-full flex items-center fixed top-0 justify-between p-4 h-16 shadow-md">
      {/* Handlevogn-ikon */}
      <div className="text-white text-3xl cursor-pointer">
        <FaShoppingCart />
      </div>

      <Nav />
    </header>
  );
}

export default Header;
