import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-row gap-3">
        {/* <div className="footer-info">
          <p>&copy; 2023 Juan Ludevid. All rights reserved.</p>
          <p>Contact: martinscarponi@gmail.com</p>
        </div> */}
        {/* <p>
          Want to stay in touch? Get social and keep up to date by clicking on
          the icons below.
        </p> */}
        <div className="social-media-icons">
          <a href="https://www.facebook.com/your-facebook-page">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.twitter.com/your-twitter-page">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com/your-instagram-page">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          {/* <a href="https://www.linkedin.com/in/your-linkedin-profile">
            <FontAwesomeIcon icon={faLinkedIn} />
          </a> */}
        </div>
      </div>
    </footer>
  );
}
