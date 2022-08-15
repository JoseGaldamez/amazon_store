import React from "react";
import { FaSistrix } from "react-icons/fa";

import LogoAmazon from "../../assets/img/logo.png";

export const Navbar = () => {
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
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-warning my-2 my-sm-0" type="submit">
            <FaSistrix size={20} />
          </button>
        </form>
      </div>
    </nav>
  );
};
