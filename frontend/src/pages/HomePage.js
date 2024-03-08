// src/components/HomePage.js
import React from 'react';
import { Box, Button, Typography, Grid, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';

const HomePage = () => {
  // Dummy data for featured products or services
  const features = [
    {
      title: 'Feature 1',
      description: 'Description for feature 1',
      imageUrl: 'https://source.unsplash.com/random',
    },
    {
      title: 'Feature 2',
      description: 'Description for feature 2',
      imageUrl: 'https://source.unsplash.com/random',
    },
    {
      title: 'Feature 3',
      description: 'Description for feature 3',
      imageUrl: 'https://source.unsplash.com/random',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', p: 8, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h2" gutterBottom>Welcome to DataPulse</Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Explore the next generation of data-driven e-commerce solutions.
        </Typography>
        <Button variant="contained" color="primary" size="large">Learn More</Button>
      </Box>

      {/* Features Section */}
      <Box sx={{ flexGrow: 1, p: 8 }}>
        <Typography variant="h4" gutterBottom>Features</Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={feature.title}
                    height="140"
                    image={feature.imageUrl}
                    title={feature.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* About Section */}
      <Box sx={{ textAlign: 'center', p: 8, backgroundColor: '#e3f2fd' }}>
        <Typography variant="h4" gutterBottom>About DataPulse</Typography>
        <Typography variant="h6">
          DataPulse is pioneering in providing innovative solutions for e-commerce through data analytics.
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
