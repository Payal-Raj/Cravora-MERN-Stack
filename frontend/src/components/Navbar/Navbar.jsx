import React, { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import Button from "../button/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import { FaBoxOpen, FaSignOutAlt } from "react-icons/fa";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const [open, setOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const navigate = useNavigate();
  const location = useLocation();
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (item) => {
    setMenu(item);
    if (isMobile) setOpen(false); // Close mobile menu after click
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMenuClick = (e) => {
    e.preventDefault(); // prevent default anchor behavior
    handleClick("Menu");
    if (isMobile) setOpen(false);

    if (location.pathname === "/") {
      // Already on Home page
      const section = document.getElementById("explore-menu");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to Home with hash
      navigate("/#explore-menu");
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link
        to="/"
        className="logo-link"
        onClick={() => {
          handleClick("Home");
          scrollToTop();
        }}
      >
        <img src={assets.logo_without_bg} alt="Logo" className="logo" />
      </Link>

      {/* Mobile toggle */}
      {isMobile && (
        <div className="toggle-btn" onClick={() => setOpen(!open)}>
          <span className="material-symbols-outlined">
            {open ? "close" : "menu"}
          </span>
        </div>
      )}

      {/* Navbar links */}
      <ul
        className={`navbar-menu ${isMobile ? "mobile" : ""} ${open ? "open" : ""}`}
      >
        <li className={menu === "Home" ? "active" : ""}>
          <Link
            to="/"
            onClick={() => {
              handleClick("Home");
              scrollToTop();
            }}
          >
            Home
          </Link>
        </li>

        <li className={menu === "Menu" ? "active" : ""}>
          <a href="#explore-menu" onClick={handleMenuClick}>
            Menu
          </a>
        </li>

        <li className={menu === "Mobile-app" ? "active" : ""}>
          <a
            href="#app-download"
            onClick={() => {
              handleClick("Mobile-app");
              if (isMobile) setOpen(false);
            }}
          >
            Mobile App
          </a>
        </li>

        {/* Mobile icons below menu links */}
        {isMobile && open && (
          <div className="mobile-dropdown-bottom">
            <Link
              to="/cart"
              className="mobile-cart-link"
              onClick={() => setOpen(false)}
            >
              <span className="material-symbols-outlined">shopping_cart</span>
              <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
            </Link>
            {!token ? (
              <Button
                text="Sign in"
                onClick={() => {
                  setShowLogin(true);
                  setOpen(false);
                }}
              />
            ) : (
              <div className="navbar-profile">
                <img
                  src={assets.profile_icon}
                  alt=""
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                />

                {(showProfileMenu || !isMobile) && (
                  <ul className="nav-profile-dropdown">
                    {/* Orders */}
                    <li
                      className="dropdown-item"
                      onClick={() => {
                        navigate("/orders"); 
                        setShowProfileMenu(false);
                        setOpen(false);
                      }}
                    >
                      <FaBoxOpen className="dropdown-icon" />
                      <p>Orders</p>
                    </li>

                    <hr />

                    {/* Logout */}
                    <li
                      className="dropdown-item"
                      onClick={() => {
                        logout();
                        setShowProfileMenu(false);
                        setOpen(false);
                      }}
                    >
                      <FaSignOutAlt className="dropdown-icon" />
                      <p>Logout</p>
                    </li>
                  </ul>
                )}
              </div>
            )}
          </div>
        )}
      </ul>

      {/* Desktop icons */}
      {!isMobile && (
        <div className="navbar-right">
          <span className="material-symbols-outlined">search</span>
          <Link to="/cart" className="navbar-cart-link">
            <span className="material-symbols-outlined">shopping_cart</span>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </Link>
          {!token ? (
            <Button
              text="Sign in"
              onClick={() => {
                setShowLogin(true);
                setOpen(false);
              }}
            />
          ) : (
            <div className="navbar-profile">
              <img src={assets.profile_icon} alt="" />
              <ul className="nav-profile-dropdown">
                <li className="dropdown-item">
                  <FaBoxOpen className="dropdown-icon" />
                  <p>Orders</p>
                </li>

                <hr />

                <li className="dropdown-item" onClick={logout}>
                  <FaSignOutAlt className="dropdown-icon" />
                  <p>Logout</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
