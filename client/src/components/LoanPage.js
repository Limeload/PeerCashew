import React from 'react';
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';
import Footer from './Footer';
import LoanCalculator from './LoanCalculator';
import NavigationBar from './NavigationBar';
import { Link } from 'react-router-dom';

function LoanPage({user, onLogIn, onLogOut }) {
  return (
<div>
<NavigationBar user={user} onLogIn={onLogIn} onLogOut={onLogOut} />
  <Container>
    <Row>
      <Col md={6}>
      <div className='hero-content'>
<h1>Need cash to peel away your debt? We've got you covered! </h1>
<h6>Get a loan that won't leave you feeling like a lemon.</h6>
<Accordion defaultActiveKey="0">
<Accordion.Item eventKey='0'>
  <Accordion.Header>1. Submit an Application</Accordion.Header>
  <Accordion.Body>This involves filling out an application form and providing personal and financial information, such as income, credit score, and employment status.</Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey='1'>
  <Accordion.Header>2. Application review</Accordion.Header>
  <Accordion.Body>The lending institution will review the application and verify the information provided.</Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey='2'>
  <Accordion.Header>3. Loan approval</Accordion.Header>
  <Accordion.Body>If the application is approved, the lending institution will provide a loan offer, including loan amount, interest rate, and repayment terms.</Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey='3'>
  <Accordion.Header>4. Loan disbursement</Accordion.Header>
  <Accordion.Body>If the loan offer is accepted, the lending institution will disburse the loan funds to the borrower's account.</Accordion.Body>
</Accordion.Item>
  </Accordion>
  <br />
  <h3> Check Your Loan Eligibility</h3>
<Accordion defaultActiveKey="0">
    <>
    <br />
<Accordion.Item eventKey='0'>
  <Accordion.Header>1. Credit score</Accordion.Header>
  <Accordion.Body>Most lending institutions require a minimum credit score to be eligible for a loan.</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey='1'>
  <Accordion.Header>2. Income</Accordion.Header>
  <Accordion.Body>The borrower must have a steady income to demonstrate their ability to repay the loan.</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey='2'>
  <Accordion.Header>3. Employment status:</Accordion.Header>
  <Accordion.Body>The borrower must be employed full-time or part-time, or have a stable source of income, such as self-employment or retirement benefits.</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey='3'>
  <Accordion.Header>4. Credit history</Accordion.Header>
  <Accordion.Body> The borrower must have a good credit history, with no recent bankruptcies, foreclosures, or delinquencies on credit accounts.</Accordion.Body>
</Accordion.Item>
</>
  </Accordion>
  <br />
  <Link to="/loanForm">
  <Button variant='dark'> Start your application </Button>
  </Link>
</div>
</Col>
<Col md={6}>
  <LoanCalculator />
</Col>
</Row>
  </Container>
  <Footer />
</div>

  );
}

export default LoanPage;
