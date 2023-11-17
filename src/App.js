import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import OurTeam from './components/Our Team/OurTeam';
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/ourteam" element={<OurTeam/>}/>
          
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
