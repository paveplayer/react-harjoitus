import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './counter.css'; 

// Määritellään tyypit propseille
interface CounterProps {
  count?: number;             // Alkuarvo (valinnainen)
  onChange?: (value: number) => void; // Funktio, joka kutsutaan arvon muuttuessa
}

export default function Counter({ count: initialCount = 0, onChange }: CounterProps) {
  // Alustetaan tila propseista tulevalla alkuarvolla (tai 0:lla)
  const [count, setCount] = useState<number>(initialCount);

  // Funktiot numeron muuttamiseen ja onChange-kutsu
  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    if (onChange) {
      onChange(newCount);
    }
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    if (onChange) {
      onChange(newCount);
    }
  };

  return (
    <Container className="counter">
      <Row>
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