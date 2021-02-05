import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { Button, Navbar, Col } from "react-bootstrap";
import logo from "../assets/logo_transparent.png";

const NavMovie = () => {
  const { watchlist } = useContext(GlobalContext);
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
          <Link
            to="/watchlist"
            style={{ color: "white", textDecoration: "none" }}
          >
            <Button variant="danger">
              <span> Watchlist ({watchlist.length})</span>
            </Button>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavMovie;
