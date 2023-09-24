import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Footer.scss";
import { NavDropdown } from 'react-bootstrap';
const Footer = () => {
  return (
    <footer className='footer'>
        <div className="p-2">
            <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/"> LOGO </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/about">소개</Nav.Link>
                        <Nav.Link href="/articles">게시판</Nav.Link>
                        <Nav.Link href="/dataroom">자료실</Nav.Link>
                        <NavDropdown title="개발자" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="/profile/kim"> Developer 1 </NavDropdown.Item>
                            <NavDropdown.Item href="/profile/lee"> Developer 2 </NavDropdown.Item>
                            <NavDropdown.Item href="/profile/park"> Developer 3 </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        <div className="p-2">
            <p className='copyright'>Copyright © 2023 React Bootstrap. Built with Docusaurus.</p>
        </div>
    </footer>
  )
}

export default Footer