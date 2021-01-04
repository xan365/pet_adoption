import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <i className="fas fa-dog"> Best Friend</i>
          </Navbar.Brand>
        </LinkContainer>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01"></div>
      </Container>
    </Nav>
  );
}

export default Header;
