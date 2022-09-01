import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import './App.css';

const App = () => (
  <div className="App">
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/details/:movie_id" element={<Details />} />
    </Routes>
  </div>
);

export default App;
