import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

function LoanList() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    fetch('/loans')
      .then(response => response.json())
      .then(loans => {
        setLoans(loans);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h3>Loan List</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {loans?.map((loan) => (
            <tr key={loan?.id}>
              <td>{loan?.id}</td>
              <td>{loan?.amount}</td>
              <td>{loan?.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default LoanList;
