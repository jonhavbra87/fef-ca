import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="flex flex-col items-start p-4 text-white">
      <ul className="flex align-middle gap-3">
        <li>
          <Link
            to="/"
            className="hover:text-gray-500 transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="hover:text-gray-500 transition-colors duration-200"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:text-gray-500 transition-colors duration-200"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
