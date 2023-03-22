import React from 'react';
import NavigationBar from './NavigationBar';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function InvestmentPage({user, onLogIn, onLogOut }){
    return (
        <div>
<NavigationBar user={user} onLogIn={onLogIn} onLogOut={onLogOut} />
  <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>Investment Options</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="6">
          <Card>
            <Card.Body>
              <Card.Title>Stocks</Card.Title>
              <Card.Text>
                Invest in individual stocks or exchange-traded funds (ETFs) to potentially earn higher returns, but with greater risk.
              </Card.Text>
              <Link to="/investmentForm"><Button variant='dark'> Invest now! </Button></Link>
   </Card.Body>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <Card.Body>
              <Card.Title>Bonds</Card.Title>
              <Card.Text>
                Invest in bonds to potentially earn a lower but more predictable return, with less risk than stocks.
              </Card.Text>
              <Link to="/investmentForm"><Button variant='dark'> Invest now! </Button></Link>
             </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
        </div>
    )
}

export default InvestmentPage;
