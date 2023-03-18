import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const testimonials = [
  {
    name: 'John Doe',
    text: 'PeerCashew has helped me get the funds I needed to start my own business. The platform is easy to use and the customer support is top-notch!',
  },
  {
    name: 'Mike Johnson',
    text: 'I used PeerCashew to refinance my student loans and was impressed with the rates and terms offered. The platform was easy to use, and the support team was responsive and helpful.',
  },
  // add more testimonials here
];

function Testimonial(){
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentTestimonial]);

  return (
    <div className="testimonial-section">
      <Container>
        <Row>
          <Col>
            <h2 className="testimonial-heading">What Our Customers Say</h2>
            <p className="testimonial-subtitle">Don't just take our word for it, here's what our happy customers have to say about PeerCashew!</p>
          </Col>
        </Row>
        <Row className="testimonial-row">
          <Col md={8}>
            <div className="testimonial-text">
              <h3>{testimonials[currentTestimonial].name}</h3>
              <p>{testimonials[currentTestimonial].text}</p>
            </div>
          </Col>
          <Col md={4}>
            <Button variant="dark" className="review-button">Share your experience!</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
