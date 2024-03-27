import { FaCloudShowersHeavy } from 'react-icons/fa6';
import { FaRegSnowflake } from 'react-icons/fa';

export const setIcon = (day, size = 'large') => {
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

export const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
