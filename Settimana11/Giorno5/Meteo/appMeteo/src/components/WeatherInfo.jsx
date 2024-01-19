import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import WeatherCard from './WeatherCard';
import WeatherChart from './WeatherChart';

function WeatherInfo({ city }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = '9cc17e5d2924a7de4133da5d5cf2e6a3';
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Errore nel recupero delle informazioni meteo');
        }

        const data = await response.json();
        console.log(data);
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (city) {
      fetchData();
    }
  }, [city]);

  return (
    <div>
      {weatherData ? (
        <>
          <Row>
            <Col>
              <WeatherCard title="Temperature" value={weatherData.list[0].main.temp} unit="°C" />
               
             </Col>
            <Col>
              <WeatherCard title="Weather Conditions" value={weatherData.list[0].weather[0].description} unit="" />
            </Col>
          </Row>
          <Row>
            <Col>
              <WeatherCard title="Humidity" value={weatherData.list[0].main.humidity} unit="%" />
            </Col>
            <Col>
              <WeatherCard title="Wind Speed" value={weatherData.list[0].wind.speed} unit="m/s" />
            </Col>
          </Row>
          <Row>
            <Col>
              <WeatherChart data={weatherData.list.slice(0, 5)} />
            </Col>
          </Row>
        </>
      ) : (
        <p>Accendendo i fulmini...</p>
      )}
    </div>
  );
}

export default WeatherInfo;

