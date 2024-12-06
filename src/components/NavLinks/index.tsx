import { NavLink } from 'react-router-dom';

function NavLinks({ closeMenu }: { closeMenu: () => void }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-center">
      {/* Hjem-lenke */}
      <NavLink
        to="/"
        className="text-cream text-lg hover:text-blush transition-colors duration-200"
        onClick={closeMenu}
      >
        Home
      </NavLink>

      {/* Kontakt-lenke */}
      <NavLink
        to="/contact"
        className="text-cream text-lg hover:text-blush transition-colors duration-200"
        onClick={closeMenu}
      >
        Contact
      </NavLink>
    </div>
  );
}

export default NavLinks;
