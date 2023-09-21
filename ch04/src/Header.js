import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.scss";

const Header = () => {
  return (
    <div>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">Teaspoon</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#product">Product</Nav.Link>
            <Nav.Link href="#service">Service</Nav.Link>
            <Nav.Link href="#community">Community</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#join">Join</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header