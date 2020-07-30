import React from "react";
import Logo from "../../assets/viviflix-logo.png";
import "./styles.css";
import Button from "../Button";

const Menu = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img alt="viviflix" className="Logo" src={Logo} />
      </a>
      <Button className="ButtonLink" as="a" children="Novo vídeo" href="/" />
    </nav>
  );
};

export default Menu;
