import React, { useState } from "react";
import Logo from "../assets/imagotipo_blanco.png";
import "../styles/header.scss";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-wrapper">
      <div className="header_logo">
        <Link to="/"><img src={Logo} alt="Naranaja Sound System" /></Link>
      </div>
      
      <div className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>

      <div className={`header_links ${menuOpen ? 'open' : ''}`}>
        <HashLink smooth to="/#faqs" onClick={toggleMenu}>FAQS</HashLink>
        <HashLink smooth to="/#entradas" onClick={toggleMenu}>Compra tu entrada</HashLink>
        <Link to={"/about-us"} onClick={toggleMenu}>Sobre Naranja</Link>
        <HashLink smooth to="/#colaboradores" onClick={toggleMenu}>Colaboradores</HashLink>
      </div>
    </div>
  );
};

export default Header;
