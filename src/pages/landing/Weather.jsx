import React, { useState } from 'react';
import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import WeatherInputForm from './components/WeatherInputForm';

const Weather = () => {
  const navigate = useNavigate();
  const [cityName, setCityName] = useState('');
  const today = dayjs().format('YYYY-MM-DD');
  const oneWeek = dayjs().subtract(7, 'days').format('YYYY-MM-DD');
  const handleChange = (e) => {
    setCityName(e.target.value);
  };
  function renderWeatherWithCityName(cityName, oneWeek, today) {
    // calling Weather Energy API
    fetch(
      `https://api.weatherbit.io/v2.0/history/energy?key=${process.env.REACT_APP_API_KEY}&city=${cityName}&start_date=${oneWeek}&end_date=${today}&tp=daily`
    )
      .then((response) => response.json())
      .then((data) => {
        setCityName('');
        navigate('/details', { state: { data: data } });
      })
      .catch((error) => console.error(error));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityName === '') return;
    renderWeatherWithCityName(cityName, oneWeek, today);
  };

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: 'beige',
      }}
    >
      <div style={{ padding: '5rem' }}>
        {isMobile ? (
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            Weather Forecast
          </Typography>
        ) : (
          <Typography variant="h3" sx={{ textAlign: 'center' }}>
            Weather Forecast
          </Typography>
        )}
      </div>
      <WeatherInputForm
        cityName={cityName}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Weather;
