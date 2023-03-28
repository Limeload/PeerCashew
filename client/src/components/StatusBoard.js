import React, { useState, useEffect } from "react";
import { Badge, Card } from "react-bootstrap";
import UserDashboard from "./UserDashboard";

function StatusBoard({ user }) {
  console.log(user);
  const [loans, setLoans] = useState([]);
  const [investors, setInvestors] = useState([]);
  useEffect(() => {
    if (user) {
      fetch(`/users/${user.id}/loans`)
        .then((response) => response.json())
        .then((data) => setLoans(data));

      fetch(`/users/${user.id}/investors`)
        .then((response) => response.json())
        .then((data) => setInvestors(data));
    }
  }, [user]);

  return (
    <div>
      <div className="status">
        <Card style={{ width: "18rem" }}>
          <Card.Header>Loans</Card.Header>
          <Card.Body>
            <Card.Title>Total: {loans?.length}</Card.Title>
            <Card.Text>
              <Badge className="badge bg-dark">
                {loans?.filter((l) => l.status === "Pending").length} Pending
              </Badge>{" "}
              <Badge className="badge bg-dark">
                {loans?.filter((l) => l.status === "Approved").length} Approved
              </Badge>{" "}
              <Badge className="badge bg-dark">
                {loans?.filter((l) => l.status === "Rejected").length} Rejected
              </Badge>{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Header>Investments</Card.Header>
          <Card.Body>
            <Card.Title>Total: {investors?.length}</Card.Title>
            <Card.Text>
              <Badge className="badge bg-dark">
                {investors?.filter((i) => i.status === "Pending").length} Pending
              </Badge>{" "}
              <Badge className="badge bg-dark">
                {investors?.filter((i) => i.status === "Active").length} Active
              </Badge>{" "}
              <Badge className="badge bg-dark">
                {investors?.filter((i) => i.status === "Closed").length} Closed
              </Badge>{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <UserDashboard user={user} />
    </div>
  );
}

export default StatusBoard;
