import React from "react";

import LogoAmazon from "../../assets/img/logo.png";

export const Navbar = ({ children }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top black-bg">
      <img src={LogoAmazon} alt="Logo Amazon" />

      <ul className="navbar-nav mr-auto"></ul>
      {children}
    </nav>
  );
};
