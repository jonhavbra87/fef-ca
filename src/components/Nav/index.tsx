import NavLinks from '../NavLinks';

function Nav() {
  return (
    <nav className="hidden md:flex md:flex-row md:gap-6 md:items-center">
      <NavLinks /> {/* Her brukes NavLinks-komponenten */}
    </nav>
  );
}

export default Nav;
