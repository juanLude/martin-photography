import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-slate-700 text-white py-4">
      <div className="container mx-auto flex flex-col items-center gap-3 text-center">
        <div className="footer-nav-links mt-4">
          <NavLink to="/" className="mr-4">
            Home
          </NavLink>
          <NavLink to="/blog" className="mr-4">
            Blog
          </NavLink>
          <NavLink to="/about" className="mr-4">
            About
          </NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <p>
          Want to stay in touch? Get social and keep up to date by clicking on
          the icons below:
        </p>
        <div className="social-media-icons mt-1">
          <a
            href="https://www.facebook.com/your-facebook-page"
            className="mr-4"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.twitter.com/your-twitter-page" className="mr-4">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a
            href="https://www.instagram.com/your-instagram-page"
            className="mr-4"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className="footer-info text-sm">
          <p>
            © {new Date().getFullYear()} Martin Scarponi Photography. All rights
            reserved.
          </p>
          {/* <p>&copy; 2023 Juan Ludevid. All rights reserved.</p> */}
          {/* <p>Contact: martinscarponi@gmail.com</p> */}
        </div>
      </div>
    </footer>
  );
}
