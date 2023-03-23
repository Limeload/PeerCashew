import React , { useState, useEffect } from "react";
import { Button, Form } from 'react-bootstrap';
import invest from "../images/invest.png";
import NavigationBar from './NavigationBar';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function InvestmentForm({ user, onLogIn, onLogOut }){
    const [amount, setAmount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanId, setLoanId] = useState(null);

    useEffect(() => {
      fetch(`/investors/` + user?.id)
        .then((response) => response.json())
        .then((data) => {
          setAmount(data?.investment_amount);
          setInterestRate(data?.interest_rate);
          setLoanId(data?.id);
        })
        .catch((error) => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }, [user?.id]);


    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = {
        amount,
        interest_rate: interestRate,
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
        body: JSON.stringify({ loan: formData }),
      })
        .then((response) => response.ok ? response.json() : Promise.reject('Network response was not ok.'))
        .then((data) => console.log(data))
        .catch((error) => console.error('There was a problem with the fetch operation:', error));
    }

    const handleDelete = () => {
      fetch(`/loans/${loanId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(response => {
        if (response.ok) {
          console.log('Loan deleted successfully');
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    };
    return(
        <div>
<NavigationBar user={user} onLogIn={onLogIn} onLogOut={onLogOut}  />
    <div className="loan-form">
      <h2>Invest for your good</h2>
      <div className='loanform-image'>
                <img src={invest} alt={invest} />
            </div>
      <Form onSubmit={handleSubmit}>
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
        <Button variant="dark" type="submit">
          Submit Application
        </Button>
        <Button variant="light" onclick={handleDelete}>
         Delete
        </Button>
      </Form>
      <br />
      <div><Link exact to='/investors'>Go Back!</Link></div>
    </div>
    <Footer />
    </div>
  );
}

export default InvestmentForm;
