import React from "react";
import Logo from "../assets/imagotipo_blanco.png";
import "../styles/header.scss";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header_logo">
        <Link to="/"><img src={Logo} alt="Naranaja Sound System" /></Link>
      </div>
      <div className="header_links">
        <HashLink smooth to="/#faqs">FAQS</HashLink>
        <HashLink smooth to="/#entradas">Compra tu entrada</HashLink>
        <Link to={"/about-us"}>Sobre Naranja</Link>
        <HashLink smooth to="/#colaboradores">Colaboradores</HashLink>
      </div>
    </div>
  );
};

export default Header;
