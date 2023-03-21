import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import loanform from "../images/loanform.png";
import NavigationBar from './NavigationBar';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const LoanForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [term, setTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      title,
      description,
      amount,
      interest_rate: interestRate,
      term_length: term,
    };

    fetch('/loans', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ loan: formData }),
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  };


  return (
    <div>
          <NavigationBar />
    <div className="loan-form">
      <h2>Create a new loan</h2>
      <div className='loanform-image'>
                <img src={loanform} alt={loanform} />
            </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="amount">
          <Form.Label>Loan Amount</Form.Label>
          <Form.Control
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="interestRate">
          <Form.Label>Interest Rate</Form.Label>
          <Form.Control
            type="number"
            step="0.01"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="term">
          <Form.Label>Term (in months)</Form.Label>
          <Form.Control
            type="number"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </Form.Group>
        <br />
        <Button variant="dark" type="submit">
          Submit Application
        </Button>
      </Form>
      <br />
      <div><Link exact to='/loans'>Go Back!</Link></div>
    </div>
    <Footer />
    </div>

  );
};

export default LoanForm;
