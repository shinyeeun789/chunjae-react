import React from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Footer.scss";
const Footer = () => {
  return (
    <footer className='footer'>
            <Stack gap={3}>
                <div className="p-2">
                    <Navbar bg="primary" data-bs-theme="dark">
                        <Container>
                            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
                <div className="p-2">
                    <p className='copyright'>Copyright © 2023 React Bootstrap. Built with Docusaurus.</p>
                </div>
            </Stack>
    </footer>
  )
}

export default Footer