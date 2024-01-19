import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';

function CitySelector({ onSelectCity }) {
  const [city, setCity] = useState('');

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSelectCity = () => {
    onSelectCity(city);
  };

  const getCurrentDate = () => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString('en-US', options);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '3vh' }}>
      <Form style={{ width: '44%' }}>
        <InputGroup>
          <InputGroup.Text>{getCurrentDate()}</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Ricerca città, svela il clima!"
            value={city}
            onChange={handleCityChange}
            style={{ outline: 'none', boxShadow: 'none' }}
          />
          <Button variant="dark" onClick={handleSelectCity}>
            <span role="img" aria-label="Search">&#128269;</span>
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
  
  
}

export default CitySelector;

