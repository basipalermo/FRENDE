import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import CitySelector from './components/CitySelector';
import WeatherInfo from './components/WeatherInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <Container className="App">
            <CitySelector onSelectCity={setSelectedCity} />
      {selectedCity && <WeatherInfo city={selectedCity} />}
    </Container>
  );
}

export default App;

