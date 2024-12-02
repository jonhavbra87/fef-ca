import { Link } from 'react-router-dom';

function NavLinks({ closeMenu }: { closeMenu: () => void }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-center">
      {/* Hjem-lenke */}
      <Link
        to="/"
        className="text-cream text-lg hover:text-blush transition-colors duration-200"
        onClick={closeMenu}
      >
        Home
      </Link>

      {/* Kontakt-lenke */}
      <Link
        to="/contact"
        className="text-cream text-lg hover:text-blush transition-colors duration-200"
        onClick={closeMenu}
      >
        Contact
      </Link>
    </div>
  );
}

export default NavLinks;
