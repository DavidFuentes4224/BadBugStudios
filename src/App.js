import './App.css';
import 'antd/dist/antd.css';
import './index.css';
import { Foot } from "./sections/footer";
import { Home } from './pages/home';
import { SkyClimbers } from './pages/skyclimbers';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import NoPage from './pages/nopage.jsx';

function App() {
  const [tab, setTab] = useState('home');
  document.title = "David Fuentes";

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
        <Routes path="/">
          <Route index element={<Home />} />
          <Route path="skyclimbers" element={<SkyClimbers />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <Foot />
    </div>
  );
}

export default App;
