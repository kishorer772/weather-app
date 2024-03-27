import { Box } from '@mui/material';

export function CustomTabPanel(props) {
  const { children, value, index, style, ...other } = props;

  return (
    <div hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3, ...style }}>{children}</Box>}
    </div>
  );
}
