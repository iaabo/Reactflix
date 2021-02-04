import React from "react";
import { Link } from "react-router-dom";
import { Button, Nav, Navbar, Col } from "react-bootstrap";
import logo from "../assets/logo_transparent.png";

const NavBar = () => {
  return (
    <div>
      <Navbar fixed="top" bg="dark" variant="dark">
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
        <Navbar.Collapse className="justify-content-end">
          <Col xs={6} md={2}>
            <Button variant="danger">
              <Link
                to="/watchlist"
                style={{ color: "white", textDecoration: "none" }}
              >
                Watchlist
              </Link>
            </Button>
          </Col>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
