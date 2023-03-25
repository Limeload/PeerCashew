import React, { useEffect, useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";

function LoanRequest({ user }) {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    // Fetch loans data for the all the users of Peercashew
    fetch(`/users/${user?.id}/loans`)
      .then((response) => response.json())
      .then((data) => setLoans(data));
  }, [user]);

  const pendingLoans = loans.filter((loan) => loan?.status === "Pending");

  return (
    <div>
      <Row>
        {pendingLoans.map((loan) => (
          <Col sm={6} key={loan?.id}>
            <Card className="loans-cards">
              <Card.Header>Loan Request #{loan?.id}</Card.Header>
              <Card.Body>
                <Card.Title>{loan?.title}</Card.Title>
                <Card.Text>{loan?.description}</Card.Text>
                <Card.Text>Amount: {loan?.amount}</Card.Text>
                {/* <Card.Text>Status: {loan?.status}</Card.Text> */}
              </Card.Body>
              <Button variant="dark" href="/investmentForm">
        Invest Now
      </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default LoanRequest;
