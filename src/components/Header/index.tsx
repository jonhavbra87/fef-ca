import Logo from '../../assets/eCom_logo.svg';
import NavBar from '../NavBar';

function Header() {
  return (
    <header className="bg-background w-full flex items-center fixed top-0 justify-between p-4 h-16 shadow-md z-50">
      {/* Left: Logo */}
      <div className="flex items-center">
        <span className="sr-only">Logo</span>
        <img src={Logo} alt="eCom logo" className="h-10" />
      </div>

      {/* Right: Navbar and Cart */}
      <NavBar />
    </header>
  );
}

export default Header;
