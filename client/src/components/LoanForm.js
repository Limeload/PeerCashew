import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import loanform from "../images/loanform.png";
import NavigationBar from './NavigationBar';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function LoanForm({ user, onLogIn, onLogOut }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [term, setTerm] = useState('');
  const [status, setStatus] = useState('');
  const [loanId, setLoanId] = useState(null);

  // Modal handlers for saved state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (user?.id) {
      fetch(`/loans/${user.id}`)
        .then((response) => response.json())
        .then((data) => {
          setTitle(data?.title);
          setDescription(data?.description);
          setAmount(data?.amount);
          setInterestRate(data?.interest_rate);
          setTerm(data?.term_length);
          setStatus(data?.status);
          setLoanId(data?.id);
        })
        .catch((error) => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }
  }, [user?.id]);


  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = {
      title,
      description,
      amount,
      interest_rate: interestRate,
      term_length: term,
      status: status || 'Pending', // set 'pending' as default if status is not provided
    };
    let requestMethod = 'POST';
    let url = '/loans/' + user.id;
    if (loanId) {
      requestMethod = 'PUT';
      url = `/loans/${loanId}`;
    }

    fetch(url, {
      method: requestMethod,
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ loan: formData }),
    })
      .then((response) => response.ok ? response.json() : Promise.reject('Network response was not ok.'))
      .then((data) => console.log(data))
      .catch((error) => console.error('There was a problem with the fetch operation:', error));
  }


  return (
    <div>
          <NavigationBar user={user} onLogIn={onLogIn} onLogOut={onLogOut}  />
    <div className="loan-form">
      <h2>Apply for your loan</h2>
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
        <Button variant="dark" type="submit" onClick={handleShow}>
          Submit Application
        </Button>
        <Modal show={show} onHide={handleClose} animations={false}>
  <Modal.Header>
    <Modal.Title>Loan Request Submitted</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p>Your loan request has been submitted successfully.</p>
    <p>An investor will review your request and get back to you soon.</p>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="dark" onClick={handleClose}>Close</Button>
  </Modal.Footer>
</Modal>
      </Form>
      <br />
      <div><Link exact to='/loans'>Go Back!</Link></div>
    </div>
    <Footer />
    </div>

  );
};

export default LoanForm;
