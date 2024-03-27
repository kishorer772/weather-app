import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
const Weather = () => {
  const navigate = useNavigate();
  const [cityName, setCityName] = useState('');
  const today = dayjs().format('YYYY-MM-DD');
  const oneWeek = dayjs().subtract(7, 'days').format('YYYY-MM-DD');

  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityName === '') return;
    alert(cityName);

    fetch(
      `https://api.weatherbit.io/v2.0/history/energy?key=8ff6b1c427824112b02b9f92f1485bbb&city=${cityName}&start_date=${oneWeek}&end_date=${today}`
    )
      .then((response) => response.json())
      .then((data) => navigate('/details', { state: { data: data } }))
      .catch((error) => console.error(error));

    setCityName('');
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
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            minWidth: '320px',
            margin: '0 auto',
            maxWidth: '600px',
            paddingBottom: '2rem',
            gap: '1rem',
          }}
        >
          <TextField
            placeholder="Enter the City"
            style={{ padding: '1rem' }}
            onChange={handleChange}
            value={cityName}
            required
          />
          <Button
            style={{ maxWidth: '10rem', margin: '0 auto' }}
            variant="contained"
            centerRipple
            type="submit"
          >
            Get Weather
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Weather;
