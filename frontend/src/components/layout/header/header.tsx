import { useState } from "react";
import { Link } from "react-router";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faBowlFood,
  faMartiniGlassCitrus,
  faCutlery
} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container container-header">
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
            <FontAwesomeIcon icon={faCutlery} />
            Meals
          </Link>
          <Link to="/cocktails" className="nav-link">
            <FontAwesomeIcon icon={faMartiniGlassCitrus} />
            Cocktails
          </Link>
        </nav>

        {/* Módulo Sign In / Sign Up */}
        {!isOpen ? (
          <div className="auth">
            <Link to="/sign-in" className="auth-link">
              Sign In
            </Link>
            <Link to="/sign-up" className="auth-button">
              Sign Up
            </Link>
          </div>
        ) : (
          <div className="auth">
            <Link to="/sign-up" className="auth-button">
              Sign Up
            </Link>
          </div>
        )}

        {/* Menú móvil */}
        <button onClick={() => setIsOpen(!isOpen)} className="menu-button">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>

      {/* Menú desplegable en móvil */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="container-menu">
          <Link to="/meals" className="mobile-link">
            <FontAwesomeIcon icon={faBowlFood} />
            Meals
          </Link>
          <Link to="/cocktails" className="mobile-link">
            <FontAwesomeIcon icon={faMartiniGlassCitrus} />
            Cocktails
          </Link>
          <Link to="/sign-in" className="sigin">
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
};
