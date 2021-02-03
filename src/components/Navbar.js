import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_transparent.png";

const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="" className="logo" style={{height:"60px", width:"280px"}} />
      </Link>
      <Link to="/watchlist">Watchlist</Link>
    </div>
  );
};

export default Navbar;
