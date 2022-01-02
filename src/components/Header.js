import React, { useContext, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { AuthContext } from "../context/AuthContext";
import "./Header.css";

export const Header = () => {
  const { isAuthenticated, signOut, isAuth } = useContext(AuthContext);

  useEffect(() => {
    isAuthenticated();
  }, [isAuthenticated]);

  return (
    <div className="nav-wrapper fixed-top navbar navbar-toggleable-sm navbar-expand-md">
      <div className="container">
        <Navbar className="w-100" collapseOnSelect expand="lg" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="/">Apple</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-justified w-100 nav-fill">
              <Nav.Link href="/">iphone</Nav.Link>
              {isAuth ? (
                <>
                  <Nav.Link onClick={signOut}>Logout</Nav.Link>
                  <Nav.Link href="/user/cart">Cart</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/login">Cart</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};
