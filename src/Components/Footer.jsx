import { FaLinkedin, FaLinkedinIn, FaSquareFacebook, FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="container px-4 py-10 mx-auto">
        {/* Grid layout */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* About Us */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-primary">About Us</h3>
            <p className="text-sm">
              Civitus is a platform dedicated to social development events. 
              Join us in making a difference in your community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-primary hover:underline">About</a>
              </li>
              <li>
                <a href="/events" className="hover:text-primary hover:underline">Events</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary hover:underline">Contact</a>
              </li>
              <li>
                <a href="/faq" className="hover:text-primary hover:underline">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-primary">Follow Us</h3>
            <div className="flex space-x-4 text-lg">
              <a href="#" className="text-gray-500 hover:text-primary">
                <FaSquareFacebook></FaSquareFacebook>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <FaSquareXTwitter></FaSquareXTwitter>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <FaSquareInstagram></FaSquareInstagram>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <FaLinkedin></FaLinkedin>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 mt-10 text-sm text-center border-t border-base-300">
          <p>&copy; 2025 Civitus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
