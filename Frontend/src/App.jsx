import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Conversion from './components/Conversion';
import ConvertToJPG from './components/ConvertToJPG';
import StartPage from './components/StartPage';
import Servillance from './components/Servillance';
import ImageUpload from './components/ImageUpload';
import ConvertToPNG from './components/ConvertToPNG';
import SuperRes from './components/SuperRes';
import ImageUpscalerApp from './components/ImageUpload';

// Wrapper component to conditionally render Navbar
function Layout() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/upscale" element={<ImageUpload />} />
        <Route path="/ser" element={<Servillance />} />
        <Route path="/convertion" element={<Conversion />} />
        <Route path="/convert-jpg" element={<ConvertToJPG />} />
        <Route path="/convert_png" element={<ConvertToPNG />} />
        <Route path="/superres" element={<SuperRes />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
