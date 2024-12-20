import { FaInstagram, FaSnapchat, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Logo from '../../assets/eCom_logo.svg';

function Footer() {
  return (
    <footer className="bg-neutralSecondary py-10 px-6 w-full mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Logo and "Navigation" */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-4">
            <img src={Logo} alt="eComSite Logo" className="h-10 w-auto" />
            <span className="text-lg font-bold text-neutral">eComSite</span>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-neutral">
            <li>
              <a href="#" className="hover:text-primary transition">
                Products & Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Resources
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                About
              </a>
            </li>
          </ul>
          <div className="flex gap-4 text-lg my-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-opacity-60 transition"
              aria-label="Visit our Instagram page"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-opacity-60 transition"
              aria-label="Visit our Twitter page"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-opacity-60 transition"
              aria-label="Visit our LinkedIn page"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.snapchat.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-opacity-60 transition"
              aria-label="Visit our Snapchat page"
            >
              <FaSnapchat />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-neutral">
            Join Our Newsletter
          </h3>
          <p className="text-sm text-neutral mt-2">
            Be the first to know about our latest updates, exclusive offers, and
            more.
          </p>
          <form
            action="/"
            method="GET"
            className="flex flex-col md:flex-row items-center mt-4 gap-4 w-full"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-grow rounded-md border border-neutral p-2 focus:ring-primary focus:outline-none"
            />
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Legal Info */}
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 mt-8 gap-8 text-sm text-neutral border-t-2 border-gray-300 ">
        <ul className="flex justify-center md:justify-start items-center md:items-start gap-x-4 mt-4 ">
          <li>
            <a href="#" className="hover:text-primary transition">
              English
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition">
              Legal
            </a>
          </li>
        </ul>
        <p className="flex justify-center md:justify-end items-center mt-4">
          &copy; 2023 eComSite. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
