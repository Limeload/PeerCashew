// import React, {useState, useEffect} from 'react';
// import { Badge, Card } from "react-bootstrap";


function StatusBoard() {
  // const [loans, setLoans] = useState([]);
  // const [investors, setInvestors] = useState([]);

  // useEffect(() => {
  //   // Fetch loans and investors data from an API
  //   fetch("/loans/")
  //     .then((response) => response.json())
  //     .then((data) => setLoans(data));

  //   fetch("/investors/")
  //     .then((response) => response.json())
  //     .then((data) => setInvestors(data));
  // }, []);

    return (
      <div>
        <h3>Status Board</h3>
        <div className="d-flex">
          {/* <Card style={{ width: "18rem" }}>
            <Card.Header>Loans</Card.Header>
            <Card.Body>
              <Card.Title>Total: {loans.length}</Card.Title>
              <Card.Text>
                <Badge variant="dark">{loans.filter(l => l.status === "pending").length} Pending</Badge>{" "}
                <Badge variant="light">{loans.filter(l => l.status === "approved").length} Approved</Badge>{" "}
                <Badge variant="warning">{loans.filter(l => l.status === "rejected").length} Rejected</Badge>{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Header>Investors</Card.Header>
            <Card.Body>
              <Card.Title>Total: {investors.length}</Card.Title>
              <Card.Text>
                <Badge variant="dark">{investors.filter(i => i.status === "pending").length} Pending</Badge>{" "}
                <Badge variant="light">{investors.filter(i => i.status === "approved").length} Approved</Badge>{" "}
                <Badge variant="warning">{investors.filter(i => i.status === "rejected").length} Rejected</Badge>{" "}
              </Card.Text>
            </Card.Body>
          </Card> */}
        </div>
      </div>
    );
  }


export default StatusBoard;
