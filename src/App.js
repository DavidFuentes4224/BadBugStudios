import './App.css';
import 'antd/dist/antd.css';
import './index.css';
import { NavBar } from "./navigation";
import { Foot } from "./sections/footer";
import { Home } from './pages/home'
import {SkyClimbers} from './pages/skyclimbers'

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const titleStyle = {
    float: 'left',
    fontSize: '32px',
    padding: '0px 5%',
    color: 'azure'
  }
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <div class="topnav">
            <div style={titleStyle}>BAD BUG STUDIOS</div>
            <Link to="/skyclimbers">Sky Climbers</Link>
            <Link class="active" to="/">Home</Link>

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
