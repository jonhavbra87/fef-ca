import { FaInstagram, FaSnapchat, FaTwitter } from 'react-icons/fa';
import Logo from '../../assets/eCom_logo.svg';

function Footer() {
  return (
    <footer className="bg-rosewood p-5 text-white w-full static">
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-8 md:gap-0">
        {/* Left Section: Logo */}
        <div className="flex items-center justify-center h-auto">
          <img src={Logo} alt="eCom Logo" className="h-12" />
        </div>

        {/* Right Section: Newsletter Signup and Social Media */}
        <div className="flex flex-col items-center md:items-end gap-4 w-full md:w-auto">
          {/* Newsletter Form */}
          <form
            id="newsletterForm"
            className="flex flex-col md:flex-row items-center gap-4"
            action="/newslettersuccess/index.html"
            method="GET"
          >
            <label className="uppercase">
              Latest news?
              <input
                type="email"
                name="email"
                className="rounded-md border border-rosewood p-2 ml-2"
                id="emailSignup"
                placeholder="Email"
                required
              />
            </label>
            <input
              type="submit"
              className="bg-rosewood text-white px-4 py-2 rounded-md cursor-pointer hover:bg-opacity-80 transition duration-300 uppercase"
              value="Abonner"
            />
          </form>

          {/* Follow Us Section */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <h3 className="text-lg">Follow us:</h3>
            <div className="flex gap-4 text-3xl">
              {/* Using react-icons for social media icons */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blush transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blush transition-colors duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.snapchat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blush transition-colors duration-300"
              >
                <FaSnapchat />
              </a>
            </div>
            <address className="text-sm not-italic mt-2">
              Infinite ground 11, 1337 SPACE
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
