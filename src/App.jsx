import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Generator from './pages/Generator';
import BrandStudio from './pages/BrandStudio';
import PitchDeck from './pages/PitchDeck';
import Settings from './pages/Settings';
import { AnimatePresence } from 'motion/react';

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (isHomePage) return <>{children}</>;

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-container">
        <Navbar />
        <main className="content">
          {children}
        </main>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/generator" element={<Generator />} />
            <Route path="/brand-studio" element={<BrandStudio />} />
            <Route path="/pitch-deck" element={<PitchDeck />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
  );
};

export default App;
