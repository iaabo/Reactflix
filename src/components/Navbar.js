import React from "react";
import { Link } from "react-router-dom";
import { Button, Navbar, Col } from "react-bootstrap";
import logo from "../assets/logo_transparent.png";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/">
            <img
              src={logo}
              alt=""
              className="logo"
              style={{ height: "40px", width: "180px" }}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Button variant="danger">
            <Link
              to="/watchlist"
              style={{ color: "white", textDecoration: "none" }}
            >
              Watchlist
            </Link>
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
