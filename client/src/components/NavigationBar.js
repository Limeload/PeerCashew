import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';

function NavigationBar({user, handleLogOut}) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">PeerCashew</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/loans">Loans</Nav.Link>
            <Nav.Link href="#investments">Investments</Nav.Link>
            {/* <Nav.Link href="#payments">Payments</Nav.Link> */}
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            {user ? <h6>{user?.name}</h6> : null}
            {user ? (
              <Nav>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Link to="/"><Button variant='dark' onClick={handleLogOut}>Logout</Button></Link>
              </Nav>
            ) : (
              <Link to="/login"><Button variant="dark">Login / Signup</Button></Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
