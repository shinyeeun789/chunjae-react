// useNavigate : 자바스크립트와 같은 페이지 이동 또는 URL 제어와 관련한 훅(hook)
import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';        // 교체되는 영역만 Outlet으로 지정 (Router에서 어디어디라고 지정해주어야 함)
import Footer from './Footer';

const Layout = () => {
    return (
        <div>
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
                    <Nav>
                        <Nav.Link href="/login">로그인</Nav.Link>
                        <Nav.Link eventKey={2} href="/mypage">
                        마이페이지
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout