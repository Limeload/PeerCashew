import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';

function UserDashboard({ user}) {
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
    fetch(`/users/${user?.id}/loans/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    }).then(() => {
      setLoans(loans?.filter(loan => loan?.id !== id));
    });
  }

  function handleDeleteInvestment(id) {
    fetch(`/users/${user?.id}/investors/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    }).then(() => {
      setInvestments(investments?.filter(investment => investment?.id !== id));
    });
  }

  return (
    <div>
      <h2>Loans</h2>
      <Card>
        <ListGroup>
          {loans?.map(loan => (
            <ListGroupItem key={loan?.id}>
              <Link to={`/loans/${loan?.id}`}>{loan?.title}</Link> ({loan?.status})
              {loan?.status === 'pending' && (
                <>
                  {' '}
                  <Link to={`/loans/${loan?.id}/edit`}>Edit</Link>{' '}
                  <Button variant="danger" onClick={() => handleDeleteLoan(loan?.id)}>Delete</Button>
                </>
              )}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Card>
      <h2>Investments</h2>
      <Card>
        <ListGroup>
          {investments?.map(investment => (
            <ListGroupItem key={investment?.id}>
              <Link to={`/investments/${investment?.id}`}>{investment?.title}</Link> ({investment?.status})
              {investment?.status === 'pending' && (
                <>
                  {' '}
                  <Link to={`/investments/${investment?.id}/edit`}>Edit</Link>{' '}
                  <Button variant="danger" onClick={() => handleDeleteInvestment(investment?.id)}>Delete</Button>
                </>
              )}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
}

export default UserDashboard;
