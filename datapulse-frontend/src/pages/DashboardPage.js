import React from 'react';
import { Typography } from '@mui/material';

function DashboardPage() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Typography paragraph>
        Welcome to the DataPulse Dashboard. This is your overview of key metrics and data.
      </Typography>
      {/* Add your dashboard widgets and charts here */}
    </div>
  );
}

export default DashboardPage;
