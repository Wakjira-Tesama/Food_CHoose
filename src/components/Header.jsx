import React, { useState } from "react";
import "./../Style/header.css";
import { Link } from "react-router-dom";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="header__logo">
        <img src="/icon.png" alt="Logo" />
      </div>

      {/* Desktop Navigation */}
      <div className="header__nav">
        <Link to="/" className="header__link">
          Home
        </Link>
        <Link to="/about" className="header__link">
          About
        </Link>
        <Link to="/menu" className="header__link">
          Menu
        </Link>
        <Link to="/contact" className="header__link">
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="header__menuIcon">
        <div
          className="header__menuIcon__bar"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FormatAlignJustifyIcon style={{ color: "#fff" }} />
        </div>

        <div
          className={`header__menuIcon__dropdown ${menuOpen ? "active" : ""}`}
        >
          <Link
            to="/"
            className="header__link"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link to="/menu" className="header__link">
            Menu
          </Link>
          <Link
            to="/about"
            className="header__link"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="header__link"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
