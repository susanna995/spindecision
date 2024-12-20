
import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import LandingPage from './components/LandingPage';
import FormPage from './components/FormPage';
import WheelPage from './components/WheelPage';
import TorchlightCursor from './components/TorchlightCursor';

const App = () => {
  return (
    <Router>
      <TorchlightCursor />
      <Routes>
           <Route path="/" element={<LandingPage />} />
         <Route path="/form" element={<FormPage />} />
        <Route path="/wheel" element={<WheelPage />} />
      </Routes>
    </Router>
  );
};

export default App;


