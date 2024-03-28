import { Button, TextField } from '@mui/material';
import React from 'react';

const WeatherInputForm = ({ handleSubmit, handleChange, cityName, style }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          ...style,
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
  );
};

export default WeatherInputForm;
