import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Counter() {
  // Alustetaan tila (state) numerolle, oletusarvo on 0
  const [count, setCount] = useState(0);

  // Funktiot numeron muuttamiseen
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <Container className="mt-5">
      <Row className="justify-content-center align-items-center">
        <Col xs="auto">
          {/* Miinuspainike */}
          <Button variant="danger" onClick={decrement}>
            -
          </Button>
        </Col>
        
        <Col xs="auto">
          {/* Numero näytetään tässä */}
          <h2 className="mx-3 mb-0">{count}</h2>
        </Col>

        <Col xs="auto">
          {/* Pluspainike */}
          <Button variant="success" onClick={increment}>
            +
          </Button>
        </Col>
      </Row>
    </Container>
  );
}