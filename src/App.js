import logo from './logo.svg';
import './App.css';
import {NavBar} from "./navigation";
import {ShowCaseHouse} from "./showcasehouse";
import 'antd/dist/antd.css';
import './index.css';
import { AboutSection } from './aboutsection';

function App() {
  return (
    <>
    <div className="App">
     <NavBar />
     <ShowCaseHouse />
     <AboutSection />
    </div>
    </>
  );
}

export default App;
