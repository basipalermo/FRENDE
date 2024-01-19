import React from 'react';
import { Card } from 'react-bootstrap';

const WeatherCard = ({ title, value, unit }) => (
  <Card style={{ marginLeft: '80px', margin: '10px', width: '60%' }}>
    <Card.Body style={{ background: 'linear-gradient(to right, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)', borderRadius: '5px', textAlign: 'center' }}>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{value !== null && `${value} ${unit}`}</Card.Text>
    </Card.Body>
  </Card>
);

export default WeatherCard;
