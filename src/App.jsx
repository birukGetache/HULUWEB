import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage'
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
// Sample pages for routing
// const Home = () => <h2>Home Page</h2>;
// const About = () => <h2>About Page</h2>;
// const Services = () => <h2>Services Page</h2>;
// const Contact = () => <h2>Contact Page</h2>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
