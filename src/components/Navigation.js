import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <Link className="navigation__Link" to="/">
        Home
      </Link>
      <Link className="navigation__Link" to="/about">
        About
      </Link>
    </div>
  );
}

export default Navigation;
