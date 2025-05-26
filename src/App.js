import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; 
import Layout from './Layout'; 
import Home from './pages/Home';
import Search from './pages/Search';
import Simulation from './pages/Simulation';
import AIEngines from './pages/AIEngines';
import PromptGenerator from './pages/PromptGenerator';
import Contact from './pages/Contact';
import './App.css'; 

function App() {
  const location = useLocation();
  const [currentPageName, setCurrentPageName] = useState('Home');

  useEffect(() => {
    console.log('Initial location.pathname:', location.pathname); // הוספה
    const pathSegments = location.pathname.split('/').filter(Boolean);
    let pageName = 'Home'; // Default to Home
    if (pathSegments.length > 0) {
      pageName = pathSegments[0].charAt(0).toUpperCase() + pathSegments[0].slice(1);
    }
    // Normalize specific names
    if (pageName.toLowerCase() === 'aiengines') pageName = 'AIEngines';
    if (pageName.toLowerCase() === 'promptgenerator') pageName = 'PromptGenerator';

    setCurrentPageName(pageName);
  }, [location]);

  return (
    <Layout currentPageName={currentPageName}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/aiengines" element={<AIEngines />} />
        <Route path="/promptgenerator" element={<PromptGenerator />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;