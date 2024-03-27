import { Typography } from '@mui/material';
import React from 'react';

function CityName({
  isMobile,
  state,
  title,
  mobileHeading = 'h6',
  screenHeading = 'h3',
}) {
  return (
    <>
      {isMobile ? (
        <Typography variant={mobileHeading} color={'white'}>
          {state?.data[title]}
        </Typography>
      ) : (
        <Typography variant={screenHeading} color={'white'}>
          {state?.data[title]}
        </Typography>
      )}
    </>
  );
}

export default CityName;
