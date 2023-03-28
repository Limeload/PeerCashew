import React, { useState, useEffect } from 'react';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import status from '../images/status.svg';

function UserDashboard({ user }) {
  const [loans, setLoans] = useState([]);
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    fetch(`/users/${user?.id}/loans`, { credentials: 'include' })
      .then(response => response.json())
      .then(data => {
        setLoans(data);
      });
    fetch(`/users/${user?.id}/investors`, { credentials: 'include' })
      .then(response => response.json())
      .then(data => {
        setInvestments(data);
      });
  }, [user]);

  function handleDeleteLoan(id) {
    const loanToDelete = loans.find(loan => loan.id === id);
    if (loanToDelete.status === 'Pending') {
      fetch(`/users/${user?.id}/loans/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      }).then(() => {
        setLoans(loans?.filter(loan => loan?.id !== id));
      });
    } else {
      alert('You cannot delete loans that are not in pending status.');
    }
  }

  function handleDeleteInvestment(id) {
    const investmentToDelete = investments.find(investment => investment.id === id);
    if (investmentToDelete.status === 'Pending') {
      fetch(`/users/${user?.id}/investors/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      }).then(() => {
        setInvestments(investments?.filter(investment => investment?.id !== id));
      });
    } else {
      alert('You cannot delete investments that are not in pending status.');
    }
  }

  return (
    <div>
      <Card className='dashboard'>
        <Card.Header>
          <h2>Loans</h2>
        </Card.Header>
        <Card.Body>
          <ListGroup>
            {loans?.map(loan => (
              <ListGroupItem key={loan?.id}>
               {loan?.title} ({loan?.status})
                {loan?.status === 'Pending' && (
                  <>
                    {' '}
                    <Button variant="light" onClick={() => handleDeleteLoan(loan?.id)}>X</Button>
                  </>
                )}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
      <Card className='dashboard'>
        <Card.Header>
          <h2>Investments</h2>
        </Card.Header>
        <Card.Body>
          {investments.length === 0 ? (
            <p>You have not invested yet.</p>
          ) : (
            <ListGroup>
              {investments?.map(investment => (
                <ListGroupItem key={investment?.id}>
                 {investment?.title} ({investment?.status})
                  {investment?.status === 'Pending' && (
                    <>
                      {' '}
                      <Button variant="light" onClick={() => handleDeleteInvestment(investment?.id)}>X</Button>
                    </>
                  )}
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Card.Body>
      </Card>
      <img src={status} alt={status} className="status" />
    </div>
  );
}

export default UserDashboard;
