import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function Body() {
    return (
        <div className="body">
            <h1>Why Choose PeerCashew?</h1>
            <h6>Discover the benefits of using our platform</h6>
            <Container>
                <Row>
                    <Col md={4}>
                        <div className="card">
                            <h5>Fast and Easy Loan Applications</h5>
                            <p>Our platform makes it easy for you to apply for a loan. Simply fill out our online application and receive a decision within minutes.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="card">
                            <h5>Competitive Interest Rates</h5>
                            <p>We offer some of the most competitive interest rates in the industry, saving you money on your loans and investments.</p>
                        <br />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="card">
                            <h5>Robust Investment Opportunities</h5>
                            <p>Invest your money in our carefully selected investment opportunities and earn returns that can help you achieve your financial goals.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="card">
                            <h5>Convenient Payment Options</h5>
                            <p>Easily make payments through our online platform with multiple payment options, including bank transfer and credit card.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="card">
                            <h5>Customizable Investment Portfolio</h5>
                            <p>Customize your investment portfolio by selecting loans from different risk categories, diversifying your portfolio, and managing your investments in real time.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="card">
                            <h5>Exceptional Customer Support</h5>
                            <p>Our dedicated customer support team is available to answer any questions or concerns you may have throughout your experience with PeerCashew.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Body;
