import Nav from '../Nav';
import Logo from '../../assets/eCom_logo.svg';

function Header() {


  return (
    <header className="bg-background w-full flex items-center fixed top-0 justify-between p-4 h-16  shadow-[0_4px_6px_-1px_#29104A] z-50">
      <div className="flex items-center">
        <span className="sr-only">Logo</span>
        <img src={Logo} alt="eCom logo" className="h-10 mr-4" />
      </div>

      <Nav />

    </header>
  );
}

export default Header;
