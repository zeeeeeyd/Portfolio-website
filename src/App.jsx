import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import UiUx from './layout/UiUx';
import SoftwareDev from './layout/SoftwareDev';
import AiBasedSolution from './layout/AiBasedSolution';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/software-development" element={<SoftwareDev />} />
        <Route path="/ai-based-solutions" element={<AiBasedSolution />} />
        <Route path="/UI-UX" element={<UiUx />} />
      </Routes>
    </Router>
  );
};

export default App;
