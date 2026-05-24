import React, { useState, useEffect } from 'react';
import { Table, Badge, Button, Form, Modal } from 'react-bootstrap';

const STATUS_COLORS = { scheduled: 'warning', paid: 'success', overdue: 'danger' };

function PaymentHistory({ loanId, currentUser }) {
  const [payments, setPayments] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [amount, setAmount] = useState('');
  const [scheduledDate, setScheduledDate] = useState('');

  useEffect(() => {
    if (!loanId) return;
    fetch(`/loans/${loanId}/payments`, { credentials: 'include' })
      .then(r => r.json())
      .then(setPayments)
      .catch(console.error);
  }, [loanId]);

  function markPaid(payment) {
    fetch(`/loans/${loanId}/payments/${payment.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ payment: { status: 'paid', paid_date: new Date().toISOString().split('T')[0] } }),
    })
      .then(r => r.json())
      .then(updated => setPayments(prev => prev.map(p => p.id === updated.id ? updated : p)));
  }

  function handleCreate(e) {
    e.preventDefault();
    fetch(`/loans/${loanId}/payments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ payment: { amount, scheduled_date: scheduledDate, status: 'scheduled' } }),
    })
      .then(r => r.json())
      .then(newPayment => {
        setPayments(prev => [...prev, newPayment]);
        setShowForm(false);
        setAmount('');
        setScheduledDate('');
      });
  }

  return (
    <div className="mt-3">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5>Payment History</h5>
        <Button size="sm" variant="dark" onClick={() => setShowForm(true)}>+ Schedule Payment</Button>
      </div>

      <Table striped bordered hover responsive size="sm">
        <thead>
          <tr>
            <th>Amount</th>
            <th>Scheduled</th>
            <th>Paid On</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {payments.length === 0 ? (
            <tr><td colSpan={5} className="text-center text-muted">No payments yet.</td></tr>
          ) : payments.map(p => (
            <tr key={p.id}>
              <td>${Number(p.amount).toLocaleString()}</td>
              <td>{p.scheduled_date}</td>
              <td>{p.paid_date || '—'}</td>
              <td><Badge bg={STATUS_COLORS[p.status] || 'secondary'}>{p.status}</Badge></td>
              <td>
                {p.status !== 'paid' && (
                  <Button size="sm" variant="outline-success" onClick={() => markPaid(p)}>Mark Paid</Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showForm} onHide={() => setShowForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Schedule a Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleCreate}>
            <Form.Group className="mb-3">
              <Form.Label>Amount ($)</Form.Label>
              <Form.Control type="number" value={amount} onChange={e => setAmount(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Scheduled Date</Form.Label>
              <Form.Control type="date" value={scheduledDate} onChange={e => setScheduledDate(e.target.value)} required />
            </Form.Group>
            <Button variant="dark" type="submit">Schedule</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PaymentHistory;
