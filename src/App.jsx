import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import IntroPage from './intro';
import HexagonPhotoGallery3D from './My_gallery';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/gallery" element={<HexagonPhotoGallery3D />} />
      </Routes>
    </Router>
  );
};

export default App;
