import { useState } from "react";
//import { Link } from "react-router-dom";
import { Link } from "react-router";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img
            src="/icons/apple-touch-icon.png"
            alt="Logo"
            className="logo-img"
          />
        </Link>

        {/* Menú de navegación */}
        <nav className="nav">
          <Link to="/meals" className="nav-link">
            Meals
          </Link>
          <Link to="/cocktails" className="nav-link">
            Cocktails
          </Link>
        </nav>

        {/* Módulo Sign In / Sign Up */}
        <div className="auth">
          <Link to="/sign-in" className="auth-link">
            Sign In
          </Link>
          <Link to="/sign-up" className="auth-button">
            Sign Up
          </Link>
        </div>

        {/* Menú móvil */}
        <button onClick={() => setIsOpen(!isOpen)} className="menu-button">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Menú desplegable en móvil */}
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/meals" className="mobile-link">
            Meals
          </Link>
          <Link to="/cocktails" className="mobile-link">
            Cocktails
          </Link>
          <Link to="/sign-in" className="mobile-link">
            Sign In
          </Link>
          <Link to="/sign-up" className="mobile-signup">
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
