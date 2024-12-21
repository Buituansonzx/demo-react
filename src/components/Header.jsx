import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2023/11/19/27685ea4-9e27-4498-851b-9ed74264c0f0/6487f68793a1a6d6bbae8253_logo_2.svg"></img>
        </Link>
      </div>
      <nav className="header-nav">
        <ul className="sub-nav">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/stay">Stay</NavLink>
          </li>
          <li>
            <NavLink to="/dining">Dining</NavLink>
          </li>
          <li>
            <NavLink to="/spa">Spa & Wellness</NavLink>
          </li>
          <li>
            <NavLink to="/booking">Booking</NavLink>
          </li>
        </ul>
        <ul>
          <button>
            <Link to="/login">Login</Link>
          </button>
          <button>
            <Link to="/register">Sign Up</Link>
          </button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
