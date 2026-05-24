import React from "react";
import herosection from "../images/herosection.png";
import { Link } from 'react-router-dom';
import {Container, Row, Col, Button } from "react-bootstrap";

function HeroSection(){
    return (
        <div className="hero-section">
        <Container>
        <Row>
          <Col md={6}>
            <div className="hero-content">
            <h1>Lending made simple with LendSphere</h1>
            <h6>Discover your financial potential with LendSphere — the open platform that connects investors with borrowers for mutually beneficial financial opportunities.</h6>
            <Link exact to="/loans"><Button variant="dark">Get Started</Button></Link>
            </div>
          </Col>
          <Col md={6}>
            <div className="hero-image">
            <img src={herosection} alt={herosection} />
            </div>
          </Col>
        </Row>
      </Container>
        </div>
    )
}

export default HeroSection;
