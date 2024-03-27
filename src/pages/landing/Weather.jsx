import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
const Weather = () => {
  const [cityName, setCityName] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    setCityName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityName === '') return;
    alert(cityName);
    navigate('/details', { state: { name: cityName } });
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
