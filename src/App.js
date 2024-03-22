import './App.css';
import 'antd/dist/antd.css';
import './index.css';
import { Foot } from "./sections/footer";
import { Home } from './pages/home'
import { SkyClimbers } from './pages/skyclimbers'
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
  const titleStyle = {
    float: 'left',
    fontSize: '32px',
    padding: '0px 5%',
    color: 'azure'
  }
  function changeTab(tab) {
    setTab(tab);
  }
  return (
    <>
      <div className="App">
        <title>My Portfolio</title>
        
        <BrowserRouter>
        <div className='topnav'>
          <div style={titleStyle}>David Fuentes // Bad Bug Studios</div>
          <NavLink className={tab === 'skyclimbers' ? 'active' : ''} to="/skyclimbers"onClick={() => changeTab('skyclimbers')}>Sky Climbers</NavLink>
          <NavLink className={tab === 'home' ? 'active' : ''} to="/"onClick={() => changeTab('home')}>Home</NavLink>
        </div>
          <Routes path="/">
            <Route index element={<Home/>}/>
            <Route path="skyclimbers" element={<SkyClimbers/>}/>
            <Route path="*" element={<NoPage/>}/>
          </Routes>
        </BrowserRouter>
        <Foot />
      </div>

    </>
  );
}

export default App;
