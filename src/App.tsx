import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './navigation/NavBar';
import { Home } from './home/Home';
import { Visibility } from './visibility/Visibility';

export const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visibility" element={<Visibility />} />
      </Routes>
    </Router>
  );
};
