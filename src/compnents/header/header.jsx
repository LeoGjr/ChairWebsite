import React, { useState, useEffect } from "react";
import "./header.css";

const header = () => {
  // Header Scroll Background Change
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Menu Open Close
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div className={`header ${hasScrolled ? "shadow" : ""}`}>
        <div className="nav container">
          {/* Logo */}
          <a href="#" className="logo">
            LeChair
          </a>
          {/* Nav Links */}
          <div className={`navbar ${isMenuOpen ? "open-menu" : ""}`}>
            <a href="#chair" className="nav-link">
              Furniture
            </a>
            <a href="#" className="nav-link">
              Projects
            </a>
            <a href="#chair" className="nav-link">
              Products
            </a>
            <a href="#about" className="nav-link">
              About Us
            </a>
            <a href="#" className="register-btn btn">
              Register
            </a>
          </div>
          {/* Menu Icon */}
          <div
            className={`menu-icon ${isMenuOpen ? "move" : ""}`}
            onClick={toggleMenu}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
