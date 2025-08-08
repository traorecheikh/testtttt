import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Scanner from './pages/Scanner';
import Dashboard from './pages/Dashboard';
import Templates from './pages/Templates';
import Education from './pages/Education';
import SocialEngineering from './pages/SocialEngineering';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="scanner" element={<Scanner />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="templates" element={<Templates />} />
        <Route path="education" element={<Education />} />
        <Route path="social-engineering" element={<SocialEngineering />} />
      </Route>
    </Routes>
  );
}

export default App;