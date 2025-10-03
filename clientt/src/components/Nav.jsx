import React, { useState } from "react";
import "./Nav.css";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="nav-container">
        <div className="nav-left">
          {/* Brand name */}
          <a href="#" className="brand-name">
            Bistro Bliss
          </a>

          {/* desktop nav links */}
          <div className="nav-links">
            <a href="#" className="nav-link active">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#menu" className="nav-link">Menu</a>
            <a href="#pages" className="nav-link">Pages</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>

        {/* right: action button */}
        <div className="nav-right">
          <button className="book-btn">Book A Table</button>

          {/* mobile hamburger */}
          <div className="hamburger">
            <button onClick={() => setOpen((v) => !v)} aria-controls="mobile-menu" aria-expanded={open}>
              {open ? (
                <span>&#10005;</span>
              ) : (
                <span>&#9776;</span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* mobile menu panel */}
      <div id="mobile-menu" className={`mobile-menu ${open ? 'show' : ''}`}>
        <a href="#" className="mobile-link">Home</a>
        <a href="#about" className="mobile-link">About</a>
        <a href="#menu" className="mobile-link">Menu</a>
        <a href="#pages" className="mobile-link">Pages</a>
        <a href="#contact" className="mobile-link">Contact</a>
        <button className="mobile-book-btn">Book A Table</button>
      </div>
    </header>
  );
}