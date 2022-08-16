import React from "react";

import LogoAmazon from "../../assets/img/logo.png";

export const Navbar = ({ children }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top black-bg">
      <a className="navbar-brand" href="#">
        <img src={LogoAmazon} alt="Logo Amazon" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto"></ul>
        {children}
      </div>
    </nav>
  );
};
