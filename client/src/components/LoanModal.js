import React from "react";
import { Modal , Button} from "react-bootstrap";

function LoanModal({showModal, setShowModal}) {
    return (
        <div>
<Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header>
          <Modal.Title>Loan Me Some Attention: A Demo of Our Calculator!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You are interested in taking out a $10,000 personal loan with an interest rate of 8% per year. You are considering two different loan terms: a 3-year term and a 5-year term.</p>
          <p>For a 3-year term: Monthly Payment = $314.19</p>
          <p>For a 5-year term: Monthly Payment = $202.76</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
      </div>
    )
}

export default LoanModal;
