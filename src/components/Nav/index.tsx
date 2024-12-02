import NavLinks from '../NavLinks';

function Nav() {
  return (
    <nav className="hidden md:flex md:flex-row md:gap-6 md:items-center">
      <NavLinks closeMenu={() => {}} /> {/* Emty function. this is because we don´t need the closeMenu function on desktop view */}
    </nav>
  );
}

export default Nav;
