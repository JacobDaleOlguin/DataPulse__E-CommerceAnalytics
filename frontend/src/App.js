// src/App.js
import React from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage'; // Assume you have a HomePage component

function App() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}

export default App;
