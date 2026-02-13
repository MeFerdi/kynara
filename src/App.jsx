import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import CustomSoftware from './pages/CustomSoftware';
import AutomationSystems from './pages/AutomationSystems';
import ProductDesign from './pages/ProductDesign';

import { BookingProvider } from './context/BookingContext';

function App() {
  return (
    <HelmetProvider>
      <BookingProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/software" element={<CustomSoftware />} />
            <Route path="/services/automation" element={<AutomationSystems />} />
            <Route path="/services/design" element={<ProductDesign />} />
          </Routes>
        </Router>
      </BookingProvider>
    </HelmetProvider>
  );
}

export default App;
