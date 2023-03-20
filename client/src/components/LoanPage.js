import React, {useState} from 'react';
import { Container, Accordion, Button } from 'react-bootstrap';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

function LoanPage({ handleLogOut }) {
  const [showEligibility, setShowEligibility] = useState(false);

  const handleEligibilityClick = () => {
    setShowEligibility(!showEligibility);
  };

  return (
<div>
<NavigationBar  handleLogOut={handleLogOut} />
  <Container>
<div className='loan-content'>
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

<Button variant='dark' onClick={handleEligibilityClick}> Check Eligibility </Button>
<Accordion defaultActiveKey="0">
  {showEligibility ? (
    <>
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
  <Accordion.Body>If the application is approved, the lending institution will provide a loan offer, including loan amount, interest rate, and repayment terms.</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey='3'>
  <Accordion.Header>4. Loan disbursement</Accordion.Header>
  <Accordion.Body>If the loan offer is accepted, the lending institution will disburse the loan funds to the borrower's account.</Accordion.Body>
</Accordion.Item>
</>
  ) : null }
  </Accordion>
<Button variant='dark'> Start your application </Button>
<Button variant='dark'> Check your laon status </Button>
</div>
  </Container>
  <Footer />
</div>

  );
}

export default LoanPage;
