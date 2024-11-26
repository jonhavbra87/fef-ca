import Nav from '../Nav';
import { FaShoppingCart } from 'react-icons/fa';
import Logo from '../../assets/eCom_logo.svg';
import { useCartStore } from '../../store/cartStore';

function Header() {
  const { count } = useCartStore(); 

  return (
    <header className="bg-darkPurple w-full flex items-center fixed top-0 justify-between p-4 h-16  shadow-[0_4px_6px_-1px_#29104A] z-50">
   <div className="flex items-center">
    <span className='sr-only'>Logo</span>
        <img src={Logo} alt="eCom logo" className="h-10 mr-4" />
      </div>

      <Nav />

      <div className="relative text-cream text-3xl cursor-pointer">
        <span className="sr-only">Cart</span>
        <FaShoppingCart />
        {count > 0 && (
          <span className="absolute -top-2 -right-2 bg-blush text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {count}
          </span>
        )}
      </div>

    </header>
  );
}

export default Header;
