import { Link } from "react-router-dom";

function NavLinks() {
    return (
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-center">
          <Link
            to="/"
            className="text-cream text-lg hover:text-blush transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="text-cream text-lg hover:text-blush transition-colors duration-200"
          >
            Contact
          </Link>
        </div>   
    );
}

export default NavLinks;
