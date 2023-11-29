import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
// import JoinUs from './components/JoinUs/JoinUs';
import Test2 from './components/JoinUs/Test2';
// import Navbar from './components/Navbar/Navbar';
import Test from './components/Navbar/Test';
// import OurTeam from './components/Our Team/OurTeam';
import Test1 from './components/Our Team/Test1';
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Test/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/ourteam" element={<Test1/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/join" element={<Test2/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;