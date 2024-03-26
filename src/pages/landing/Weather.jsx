import { Box, Button, TextField, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';

const Weather = () => {
  const [cityName, setCityName] = useState('');

  const handleChange = (e) => {
    setCityName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cityName);
    setCityName('');
  };
  return (
    <>
      <Typography variant="h3">Weather Forecast</Typography>
      <Box
        style={{
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 6,
        }}
      >
        <form onSubmit={handleSubmit}>
          <Toolbar style={{ flexDirection: 'column' }}>
            <TextField
              placeholder="Search by City"
              onChange={handleChange}
              value={cityName}
            />
            <Button type="submit" centerRipple color="success">
              Get Weather
            </Button>
          </Toolbar>
        </form>
      </Box>
    </>
  );
};

export default Weather;
