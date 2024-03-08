// src/components/Footer.js
import React from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.dark', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="p" gutterBottom>
              DataPulse
            </Typography>
            <Typography variant="body2" component="p">
              Revolutionizing e-commerce through data analytics.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="p" gutterBottom>
              Links
            </Typography>
            {/* Add links or navigation here */}
            <Typography variant="body2" component="p" sx={{ '& a': { color: 'white', textDecoration: 'none' } }}>
              <a href="#features">Features</a><br />
              <a href="#about">About</a><br />
              <a href="#contact">Contact</a>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="p" gutterBottom>
              Follow Us
            </Typography>
            <IconButton aria-label="Twitter" color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton aria-label="Facebook" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="LinkedIn" color="inherit">
              <LinkedInIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
