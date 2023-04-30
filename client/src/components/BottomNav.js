import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const BottomNav = () => {
    const [value, setValue] = React.useState(0);
  return (
    <Box sx={{ width: 500 }}>
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Kateqoriyalar" icon={<CategoryIcon />} />
      <BottomNavigationAction label="Səbətim" icon={<ShoppingCartIcon />} />
      <BottomNavigationAction label="Giriş" icon={<AccountCircleIcon />} />
    </BottomNavigation>
  </Box>
  )
}
export default BottomNav