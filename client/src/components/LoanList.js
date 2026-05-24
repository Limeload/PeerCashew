import React, { useState, useEffect, useCallback } from 'react';
import { Table, Form, Row, Col, Button, Badge } from 'react-bootstrap';

const STATUS_COLORS = {
  pending: 'warning',
  funded: 'info',
  active: 'primary',
  repaid: 'success',
  defaulted: 'danger',
};

function LoanList() {
  const [loans, setLoans] = useState([]);
  const [filters, setFilters] = useState({
    status: '',
    min_amount: '',
    max_amount: '',
    min_rate: '',
    max_rate: '',
    term_length: '',
  });

  const fetchLoans = useCallback(() => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, val]) => {
      if (val !== '') params.append(key, val);
    });
    fetch(`/loans?${params.toString()}`)
      .then(r => r.json())
      .then(setLoans)
      .catch(console.error);
  }, [filters]);

  useEffect(() => { fetchLoans(); }, [fetchLoans]);

  function handleChange(e) {
    setFilters(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleReset() {
    setFilters({ status: '', min_amount: '', max_amount: '', min_rate: '', max_rate: '', term_length: '' });
  }

  return (
    <div>
      <h3>Loan Listings</h3>

      <div className="mb-3 p-3 border rounded bg-light">
        <h6>Filter Loans</h6>
        <Row className="g-2">
          <Col md={2}>
            <Form.Select name="status" value={filters.status} onChange={handleChange} size="sm">
              <option value="">All statuses</option>
              <option value="pending">Pending</option>
              <option value="funded">Funded</option>
              <option value="active">Active</option>
              <option value="repaid">Repaid</option>
              <option value="defaulted">Defaulted</option>
            </Form.Select>
          </Col>
          <Col md={2}>
            <Form.Control size="sm" type="number" placeholder="Min amount ($)" name="min_amount" value={filters.min_amount} onChange={handleChange} />
          </Col>
          <Col md={2}>
            <Form.Control size="sm" type="number" placeholder="Max amount ($)" name="max_amount" value={filters.max_amount} onChange={handleChange} />
          </Col>
          <Col md={2}>
            <Form.Control size="sm" type="number" placeholder="Min rate (%)" name="min_rate" value={filters.min_rate} onChange={handleChange} />
          </Col>
          <Col md={2}>
            <Form.Control size="sm" type="number" placeholder="Max rate (%)" name="max_rate" value={filters.max_rate} onChange={handleChange} />
          </Col>
          <Col md={1}>
            <Form.Control size="sm" type="number" placeholder="Term (mo)" name="term_length" value={filters.term_length} onChange={handleChange} />
          </Col>
          <Col md={1}>
            <Button size="sm" variant="outline-secondary" onClick={handleReset}>Reset</Button>
          </Col>
        </Row>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Rate</th>
            <th>Term</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {loans.length === 0 ? (
            <tr><td colSpan={6} className="text-center text-muted">No loans match your filters.</td></tr>
          ) : loans.map((loan) => (
            <tr key={loan.id}>
              <td>{loan.id}</td>
              <td>{loan.title || '—'}</td>
              <td>${Number(loan.amount).toLocaleString()}</td>
              <td>{loan.interest_rate}%</td>
              <td>{loan.term_length} mo</td>
              <td>
                <Badge bg={STATUS_COLORS[loan.status] || 'secondary'}>
                  {loan.status}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default LoanList;
