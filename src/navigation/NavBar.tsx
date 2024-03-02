import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/visibility">Visibility</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
