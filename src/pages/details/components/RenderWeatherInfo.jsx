import React from 'react';
import { Chip, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { setIcon } from '../utils/details-page';

const RenderWeatherInfo = ({ weekdays, day }) => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <Chip
        label={weekdays[dayjs(day.date).day()].slice(0, 3)}
        variant="filled"
        sx={{ color: 'white', backgroundColor: 'grey' }}
      />
      {setIcon(day)}
      <Typography color={'white'}>{day.temp}°</Typography>
    </div>
  );
};

export default RenderWeatherInfo;
