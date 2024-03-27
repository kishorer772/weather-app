import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Chip,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { useEffect } from 'react';
import { FaLocationDot, FaMapLocationDot } from 'react-icons/fa6';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCloudShowersHeavy } from 'react-icons/fa6';
// import energy from '../../assets/data/energy.json';
import { FaRegSnowflake } from 'react-icons/fa';
import dayjs from 'dayjs';
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const Details = () => {
  const theme = useTheme();
  const { state } = useLocation();

  console.log(state.data);
  const navigate = useNavigate();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (state === null) navigate('/');
  }, []);

  const setIcon = (day, size = 'large') => {
    if (day.clouds > 50) {
      return <FaCloudShowersHeavy color="white" size={24} />;
    } else if (day.temp < 10) {
      return <FaRegSnowflake color="white" size={24} />;
    } else if (day.sun_hours > 6 && day.temp > 60) {
      return <FaRegSnowflake color="white" size={24} />;
    } else {
      return (
        <FaCloudShowersHeavy color="white" size={size === 'large' ? 24 : 32} />
      );
    }
  };

  console.log(dayjs().day());
  return (
    <div style={{ paddingBlock: '3rem' }}>
      <div
        style={{
          backgroundColor: 'orange',
          width: '80%',
          marginInline: 'auto',
          // minHeight: 'calc(100% - 300px)',
          height: 'calc(100vh - 5rem)',
          maxHeight: '80vh',
          padding: isMobile ? '1rem' : '0.5rem',
          backgroundImage: ` linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(
            https://imgs.search.brave.com/2S-q0hD6gJvvlAGc6BMQpdoJlo2VD_K0UUdZdYodICc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2l0eXllYXIub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzEwL0thbnNhc0Np/dHktQ2l0eS1lbGxp/b3RoYW5leS00LW9m/LTRlbGxpb3RoYW5l/eTE0NDAuanBn
          )`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderRadius: 16,
          boxSizing: 'content-box',
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
            {isMobile ? (
              <Typography variant="h5" color={'white'}>
                {state?.data.city_name}
              </Typography>
            ) : (
              <Typography variant="h3" color={'white'}>
                {state?.data.city_name}
              </Typography>
            )}
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
            {/* <div> */}
            <FaLocationDot
              color="white"
              size={32}
              style={{ alignItems: 'center' }}
            />
            {isMobile ? (
              <Typography variant="h6" color={'white'}>
                {state?.data.timezone || 'Timezone'}
              </Typography>
            ) : (
              <Typography variant="h6" color={'white'}>
                {state?.data.timezone || 'Timezone'}
              </Typography>
            )}
          </div>
        </div>
        <div style={{}}>
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
              flexDirection: 'row',
              height: isMobile ? '150px' : '120px',
              overflowY: isMobile ? 'scroll' : 'hidden',
              padding: '1rem',
              // background: 'none',
              // backgroundColor: 'beige',
            }}
          >
            {state.data.data.map((day, index) => (
              <div
                key={index}
                style={{
                  width:
                    index === 0
                      ? isMobile
                        ? '32%'
                        : '30%'
                      : isMobile
                      ? '25%'
                      : 'calc(100% / 6)',
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
                      <Chip
                        label={weekdays[dayjs(day.date).day()]}
                        color="success"
                      />
                    </div>
                    <div>{setIcon(day, 'medium')}</div>
                  </div>
                ) : (
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
                )}
              </div>
            ))}
          </CustomTabPanel>
          <CustomTabPanel
            value={value}
            index={1}
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              height: isMobile ? '150px' : '120px',
              overflowY: isMobile ? 'scroll' : 'hidden',
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
              width: '100%',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              height: isMobile ? '150px' : '120px',
              overflowY: isMobile ? 'scroll' : 'hidden',
              padding: '1rem',
            }}
          >
            <Typography color={'white'} textAlign={'center'}>
              Gallery
            </Typography>
          </CustomTabPanel>
        </div>
        <div
          style={{
            position: 'absolute',
            top: isMobile ? 'calc(100% / 2) ' : 'calc(100% /2)',
            right: 'calc(100% / 9)',
          }}
        >
          <Button
            variant="outlined"
            color={'primary'}
            sx={{ color: 'white', borderColor: 'white' }}
            endIcon={<FaMapLocationDot />}
          >
            Latest Locations
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Details;
function CustomTabPanel(props) {
  const { children, value, index, style, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{
        backgroundColor: style.backgroundColor || 'none',
        width: '100%',
      }}
    >
      {value === index && <Box sx={{ p: 3, ...style }}>{children}</Box>}
    </div>
  );
}
