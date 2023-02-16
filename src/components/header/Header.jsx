import React from "react";
import './Header.css';

const Header = () => {
  return(
    <nav className="container-nav">
      <img className="logo" src="/assets/img/tecpet.png" alt="Logo tecpet" />

      <ul className="links">
        <li>Sobre</li>
        <li>Contato</li>
        <li>Produtos</li>
      </ul>
    </nav>
  )
}

export default Header;