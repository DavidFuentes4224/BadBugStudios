import './App.css';
import 'antd/dist/antd.css';
import './index.css';
import { Foot } from "./sections/footer";
import { Home } from './pages/home'
import { SkyClimbers } from './pages/skyclimbers'
import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";



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
          <div className="topnav">
            <div style={titleStyle}>David Fuentes // Bad Bug Studios</div>
            <Link className={tab === 'skyclimbers' ? 'active' : ''}
              to="/skyclimbers"
              onClick={() => changeTab('skyclimbers')}
            >Sky Climbers</Link>
            <Link className={tab === 'home' ? 'active' : ''}
              to="/"
              onClick={() => changeTab('home')}>Home</Link>

          </div>
          <Switch>
            <Route path="/skyclimbers">
              <SkyClimbers />
            </Route>
            <Route path="/">
              <Home />
            </Route>

          </Switch>
        </BrowserRouter>
        <Foot />
      </div>

    </>
  );
}

export default App;
