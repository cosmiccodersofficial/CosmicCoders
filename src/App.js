import './App.css';
import About from './components/About/About';
import Test from './components/About/test';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import JoinUs from './components/JoinUs/JoinUs';
import Navbar from './components/Navbar/Navbar';
import OurTeam from './components/Our Team/OurTeam';
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<Test/>}/>
          <Route exact path="/ourteam" element={<OurTeam/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/join" element={<JoinUs/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
