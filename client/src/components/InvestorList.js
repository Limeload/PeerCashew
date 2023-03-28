import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

function InvestorList() {
  const [investors, setInvestors] = useState([]);

  useEffect(() => {
    fetch('/investors')
    .then(response => response.json())
      .then(investors => {
        setInvestors(investors);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h3>Investor List</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {investors?.map((investor) => (
            <tr key={investor?.id}>
              <td>{investor?.id}</td>
              <td>{investor?.amount}</td>
              <td>{investor?.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default InvestorList;
