import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Map } from './map/Map';
import { DateTimeSelector, Value } from './datetimepicker/DateTimeSelector';
import { Position } from './map/Map';

const StyledHeader = styled.h2`
  text-align: center;
`;

export const Visibility = () => {
  const [position, setPosition] = useState<Position>({ lat: 52, lng: 21 });
  const [dateTime, setDateTime] = useState<Value>(new Date());

  useEffect(() => {
    console.log('DATE TIME', new Date(dateTime?.toString() ?? '').getTime());
    console.log('LAT', position.lat);
    console.log('LNG', position.lng);
  }, [dateTime, position.lat, position.lng]);

  return (
    <Container fluid>
      <StyledHeader>Select place and time of planned star gazing!</StyledHeader>
      <Map position={position} setPosition={setPosition} />
      <Row className="justify-content-end mt-3">
        <Col xxl={7} lg={6} sm={1} xs={0} />
        <Col xxl={3} lg={4} sm={7} xs={8}>
          <DateTimeSelector value={dateTime} onChange={setDateTime} />
        </Col>
        <Col xxl={2} lg={2} sm={4} xs={4}>
          <Button style={{ marginTop: '0.5rem' }}>Get Cellestials!</Button>
        </Col>
      </Row>
    </Container>
  );
};
