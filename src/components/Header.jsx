import React, { useState } from "react";
import Logo from "../assets/imagotipo_blanco.png";
import "../styles/header.scss";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Hamburger from 'hamburger-react';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="header-wrapper">
      <div className="header_logo">
        <Link to="/">
          <img src={Logo} alt="Naranja Sound System" />
        </Link>
      </div>
      
      <Hamburger toggled={isOpen} toggle={toggleMenu} />

      <div className={`header_links ${isOpen ? 'open' : ''}`}>
        <HashLink smooth to="/#faqs" onClick={toggleMenu}>FAQS</HashLink>
        <HashLink smooth to="/#entradas" onClick={toggleMenu}>Compra tu entrada</HashLink>
        <Link to="/about-us" onClick={toggleMenu}>Sobre Naranja</Link>
        <HashLink smooth to="/#colaboradores" onClick={toggleMenu}>Colaboradores</HashLink>
      </div>
    </div>
  );
};

export default Header;
