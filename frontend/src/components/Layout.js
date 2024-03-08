// src/components/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container } from '@mui/material';

function Layout({ children }) {
  return (
    <>
      <Header />
      <Container component="main" sx={{ mt: 8, mb: 2 }}>
        {children}
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
