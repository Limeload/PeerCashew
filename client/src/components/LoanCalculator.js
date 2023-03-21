import React, { useState }  from "react";
import { Form, Button } from 'react-bootstrap';
import calculator from "../images/calculator.png";
import LoanModal from "./LoanModal";

function LoanCalculator(){
    const [principal, setPrincipal] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [term, setTerm] = useState('');
    const [termType, setTermType] = useState('years');
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();
      const monthlyInterestRate = (interestRate / 100) / 12;
      const numPayments = termType === 'years' ? term * 12 : term;
      const numerator = monthlyInterestRate * (1 + monthlyInterestRate) ** numPayments;
      const denominator = ((1 + monthlyInterestRate) ** numPayments) - 1;
      const payment = parseFloat(principal) * (numerator / denominator);
      setMonthlyPayment(payment.toFixed(2));
    }

    return (
        <div className="loan-content">
            <div className="loan-image">
             <img src={calculator} alt={calculator}/>
            </div>
            <div className="loan-calculator">
            <h2 className="interest-rate"> Check your interest rates here! <Button variant="light" onClick={() => setShowModal(true)}>?</Button>
              <LoanModal showModal={showModal} setShowModal={setShowModal} /></h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicPrincipal">
                <Form.Label>Principal</Form.Label>
                <Form.Control type="number" placeholder="Enter principal" value={principal} onChange={(event) => setPrincipal(event.target.value)} />
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicInterestRate">
                <Form.Label>Interest Rate</Form.Label>
                <Form.Control type="number" placeholder="Enter interest rate" value={interestRate} onChange={(event) => setInterestRate(event.target.value)} />
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicTerm">
                <Form.Label>Term</Form.Label>
                <div>
                  <Form.Control type="number" placeholder="Enter term" value={term} onChange={(event) => setTerm(event.target.value)} />
                  <div className="term-type">
                    <Form.Check inline type="radio" label="Years" name="termType" id="years" checked={termType === 'years'} onChange={() => setTermType('years')} />
                    <Form.Check inline type="radio" label="Months" name="termType" id="months" checked={termType === 'months'} onChange={() => setTermType('months')} />
                  </div>
                </div>
              </Form.Group>
              <br />

              <Form.Group controlId="formBasicPaymentType">
                <Form.Label>Payment Type</Form.Label>
                <div>
                  <Form.Check inline type="radio" label="APR" name="paymentType" id="apr" checked={monthlyPayment === 0} onChange={() => setMonthlyPayment(0)} />
                  <Form.Check inline type="radio" label="Monthly Cost" name="paymentType" id="monthly" checked={monthlyPayment > 0} onChange={() => setMonthlyPayment(1)} />
                </div>
              </Form.Group>
              <br />

              <Button variant="dark" type="submit">
                Calculate
              </Button>
            </Form>

            {monthlyPayment > 0 &&
              <div className="result">
            <h2 className="interest-rate"> Monthly Payment</h2>
                <p className="payment">${monthlyPayment}</p>
              </div>
            }
          </div>
          </div>
    )
}

export default LoanCalculator;
