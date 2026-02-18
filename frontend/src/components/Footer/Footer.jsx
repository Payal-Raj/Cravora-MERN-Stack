import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo_without_bg} alt="" />
          <p>
            Cravora brings your favorite meals straight to your doorstep with
            speed, quality, and care. From fresh ingredients to fast delivery,
            we’re here to make every craving unforgettable.
          </p>
          <div className="footer-social-icons">
            <span className="social-icon">
              <FaFacebookF />
            </span>
            <span className="social-icon">
              <FaInstagram />
            </span>
            <span className="social-icon">
              <FaTwitter />
            </span>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+92 333 1245864</li>
            <li>contact@cravora.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2026 &copy; Cravora.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
