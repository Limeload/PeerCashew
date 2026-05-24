import React from 'react';
import { Container } from 'react-bootstrap';

function Footer(){
  return (
    <footer className="bg-light py-3">
      <Container>
        <p className="text-center mb-0">&copy;2023 LendSphere. Open-source under the MIT License.</p>
      </Container>
    </footer>
  );
};

export default Footer;
