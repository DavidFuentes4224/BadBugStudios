import './App.css';
import 'antd/dist/antd.css';
import './index.css';
import { Foot } from "./sections/footer";
import { Home } from './pages/home';
import React, { useState, useEffect, lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import NoPage from './pages/nopage.jsx';

const SkyClimbers = lazy(() => import('./pages/skyclimbers'));

function App() {
  const [tab, setTab] = useState('home');

  useEffect(() => {
    document.title = "David Fuentes";
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <nav className="topnav">
          <div className="topnav-brand">David Fuentes</div>
          <div className="topnav-links">
            <NavLink
              className={tab === 'skyclimbers' ? 'active' : ''}
              to="/skyclimbers"
              onClick={() => setTab('skyclimbers')}
            >
              Sky Climbers
            </NavLink>
            <NavLink
              className={tab === 'home' ? 'active' : ''}
              to="/"
              onClick={() => setTab('home')}
            >
              Home
            </NavLink>
          </div>
        </nav>
        <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading…</div>}>
          <Routes path="/">
            <Route index element={<Home />} />
            <Route path="skyclimbers" element={<SkyClimbers />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Foot />
    </div>
  );
}

export default App;
