import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../Components/navbar.css";

function Navbar() {
    const currentPage = useLocation().pathname;
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* Apple-Inspired Branding */}
            <Link to="/" className="navbar-brand">Fabricio Laboriel</Link>

            {/* Desktop Navigation */}
            <div className="nav-links">
                <Link to="/about" className={currentPage === "/about" ? "nav-link-active" : "nav-link"}>About Me</Link>
                <Link to="/portfolio" className={currentPage === "/portfolio" ? "nav-link-active" : "nav-link"}>Portfolio</Link>
                <Link to="/resume" className={currentPage === "/resume" ? "nav-link-active" : "nav-link"}>Resume</Link>
                <Link to="/contact" className={currentPage === "/contact" ? "nav-link-active" : "nav-link"}>Contact</Link>
            </div>

            {/* Hamburger Menu Icon */}
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>☰</div>

            {/* Mobile Dropdown Menu */}
            <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
                <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About Me</Link>
                <Link to="/portfolio" className="nav-link" onClick={() => setMenuOpen(false)}>Portfolio</Link>
                <Link to="/resume" className="nav-link" onClick={() => setMenuOpen(false)}>Resume</Link>
                <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;
