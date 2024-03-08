// src/components/Header.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Button, useTheme, useMediaQuery, Drawer, List } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Link as RouterLink } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
      <Typography variant="h6" sx={{ my: 2, textAlign: 'center' }}>
        DataPulse
      </Typography>
      <List>
        <ListItemButton component={RouterLink} to="/features">
          <ListItemText primary="Features" />
        </ListItemButton>
        <ListItemButton component={RouterLink} to="/about">
          <ListItemText primary="About" />
        </ListItemButton>
        <ListItemButton component={RouterLink} to="/contact">
          <ListItemText primary="Contact" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" color="primary" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src="/logo192.png" alt="DataPulse Logo" style={{ height: '48px', marginRight: theme.spacing(2) }} />
            DataPulse
          </Typography>
          {isMobile ? (
            <IconButton color="inherit" onClick={handleDrawerToggle} size="large">
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button color="inherit" component={RouterLink} to="/features">Features</Button>
              <Button color="inherit" component={RouterLink} to="/about">About</Button>
              <Button color="inherit" component={RouterLink} to="/contact">Contact</Button>
              <IconButton color="inherit" size="large">
                <SearchIcon />
              </IconButton>
              <IconButton color="inherit" size="large">
                <AccountCircleIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleDrawerToggle}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Header;