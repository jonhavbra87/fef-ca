import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex flex-col items-start p-4 text-white">
      <ul className="flex align-middle gap-3">
        <li>
          <Link to="/" className="hover:text-gray-500 transition-colors duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="hover:text-gray-500 transition-colors duration-200">
            Products
          </Link>
        </li>
        <li>
          <Link to="/post/1" className="hover:text-gray-500 transition-colors duration-200">
            Post with ID: 1
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
