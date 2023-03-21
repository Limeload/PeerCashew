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
          </Nav>
          <Nav className="justify-content-end">
            {user ? (
              <Nav>
              <Nav.Link href="#">Logged in as</Nav.Link>
              <Nav.Link href="/profile">{user ? <h6 className='username'>{user?.name}</h6> : null}</Nav.Link>
              <Link to="/"><Button variant='dark' onClick={handleLogOut}>Logout</Button></Link>
              </Nav>
            ) : (
              <Link to="/login"><Button variant="dark">Login / Signup</Button></Link>
            )}
            <br />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
