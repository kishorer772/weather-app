import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Button,
  Chip,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaLocationDot, FaMapLocationDot } from 'react-icons/fa6';
import dayjs from 'dayjs';
import CityName from './components/CityName';
import RenderWeatherInfo from './components/RenderWeatherInfo';
import { CustomTabPanel } from './components/CustomTabPanel';
import { setIcon, weekdays } from './utils/details-page';
import FixedButton from './components/FixedButton';
import WeatherContainer from './components/WeatherContainer';

const Details = () => {
  const theme = useTheme();
  const { state } = useLocation();

  const navigate = useNavigate();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (state === null) navigate('/');
  }, []);
  if (state.data.error || state.data.status_message) {
    return (
      <h1 style={{ textAlign: 'center', color: 'orangered' }}>
        {state.data.error || state.data.status_message}
      </h1>
    );
  }

  return (
    <div style={{ paddingBlock: '3rem' }}>
      <div
        className="details-container"
        style={{
          padding: isMobile ? '1rem' : '0.5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            paddingInline: isMobile ? '1rem' : '1rem',
            paddingBlock: isMobile ? '1rem' : '2rem',
          }}
        >
          <div style={{ flex: isMobile ? 8 : 5 }}>
            <CityName
              isMobile={isMobile}
              state={state}
              mobileHeading={'h6'}
              screenHeading={'h6'}
              title={'timezone'}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flex: 2,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FaLocationDot
              color="white"
              size={32}
              style={{ alignItems: 'center' }}
            />
            <CityName
              isMobile={isMobile}
              state={state}
              mobileHeading={'h6'}
              screenHeading={'h6'}
              title={'timezone'}
            />
          </div>
        </div>
        <div>
          <nav>
            <Tabs value={value} onChange={handleChange} textColor="secondary">
              <Tab label="Weather" color="white" style={{ color: 'white' }} />
              <Tab label="News" color="white" style={{ color: 'white' }} />
              <Tab label="Gallery" color="white" style={{ color: 'white' }} />
            </Tabs>
          </nav>
          <CustomTabPanel
            value={value}
            index={0}
            style={{
              display: 'flex',
              height: isMobile ? '150px' : '120px',
              overflowY: isMobile ? 'scroll' : 'hidden',
              padding: '1rem',
            }}
          >
            <WeatherContainer isMobile={isMobile} state={state} />
          </CustomTabPanel>
          <CustomTabPanel
            value={value}
            index={1}
            style={{
              height: isMobile ? '150px' : '120px',
              padding: '1rem',
            }}
          >
            <Typography color={'white'} textAlign={'center'}>
              News
            </Typography>
          </CustomTabPanel>
          <CustomTabPanel
            value={value}
            index={2}
            style={{
              height: isMobile ? '150px' : '120px',
              padding: '1rem',
            }}
          >
            <Typography color={'white'} textAlign={'center'}>
              Gallery
            </Typography>
          </CustomTabPanel>
        </div>
        <FixedButton isMobile={isMobile}>
          <Button
            variant="outlined"
            color={'primary'}
            sx={{ color: 'white', borderColor: 'white' }}
            endIcon={<FaMapLocationDot />}
          >
            Latest Locations
          </Button>
        </FixedButton>
      </div>
    </div>
  );
};

export default Details;
