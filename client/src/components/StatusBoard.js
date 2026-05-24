import React, { useState, useEffect } from "react";
import { Badge, Card, Row, Col } from "react-bootstrap";
import UserDashboard from "./UserDashboard";

const LOAN_STATUS_COLORS = {
  pending: "warning",
  funded: "info",
  active: "primary",
  repaid: "success",
  defaulted: "danger",
};

const INVESTMENT_STATUS_COLORS = {
  pending: "warning",
  active: "primary",
  closed: "secondary",
};

function StatusBoard({ user }) {
  const [loans, setLoans] = useState([]);
  const [investors, setInvestors] = useState([]);

  useEffect(() => {
    if (!user) return;
    fetch(`/users/${user.id}/loans`, { credentials: "include" })
      .then((r) => r.json())
      .then(setLoans)
      .catch(console.error);

    fetch(`/users/${user.id}/investors`, { credentials: "include" })
      .then((r) => r.json())
      .then(setInvestors)
      .catch(console.error);
  }, [user]);

  const loanStatuses = ["pending", "funded", "active", "repaid", "defaulted"];
  const investmentStatuses = ["pending", "active", "closed"];

  return (
    <div>
      <Row className="status g-3 mb-4">
        <Col md={6}>
          <Card>
            <Card.Header><strong>My Loans</strong></Card.Header>
            <Card.Body>
              <Card.Title>Total: {loans.length}</Card.Title>
              <Card.Text as="div">
                {loanStatuses.map((s) => {
                  const count = loans.filter((l) => l.status === s).length;
                  return count > 0 ? (
                    <Badge key={s} bg={LOAN_STATUS_COLORS[s]} className="me-1">
                      {count} {s}
                    </Badge>
                  ) : null;
                })}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header><strong>My Investments</strong></Card.Header>
            <Card.Body>
              <Card.Title>Total: {investors.length}</Card.Title>
              <Card.Text as="div">
                {investmentStatuses.map((s) => {
                  const count = investors.filter((i) => i.status?.toLowerCase() === s).length;
                  return count > 0 ? (
                    <Badge key={s} bg={INVESTMENT_STATUS_COLORS[s]} className="me-1">
                      {count} {s}
                    </Badge>
                  ) : null;
                })}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <UserDashboard user={user} />
    </div>
  );
}

export default StatusBoard;
