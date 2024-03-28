import { Chip, Typography } from '@mui/material';
import React from 'react';
import { setIcon, weekdays } from '../utils/details-page';
import RenderWeatherInfo from './RenderWeatherInfo';
import dayjs from 'dayjs';

const WeatherContainer = ({ state, isMobile }) => {
  return (
    <>
      {state?.data?.data.map((day, index) => (
        <div
          key={index}
          style={{
            width: index === 0 ? '30%' : isMobile ? '25%' : 'calc(100% / 6)',
            paddingInline: '0.5rem',
            marginInline: '0.4rem',
            minHeight: '90%',
            height: isMobile ? '40px' : '100%',
          }}
        >
          {index === 0 ? (
            <div
              style={{
                minHeight: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: 6,
                }}
              >
                <Typography
                  color={'white'}
                  variant={isMobile ? 'h4' : 'h3'}
                  textAlign={'center'}
                >
                  {day.temp}°
                </Typography>
                <Chip label={weekdays[dayjs(day.date).day()]} color="success" />
              </div>
              <div>{setIcon(day, 'medium')}</div>
            </div>
          ) : (
            <RenderWeatherInfo day={day} weekdays={weekdays} />
          )}
        </div>
      ))}
    </>
  );
};

export default WeatherContainer;
