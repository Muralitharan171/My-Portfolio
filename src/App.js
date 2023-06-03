import React from 'react'
import './App.css';
import Topbar from './Topbar/Topbar'
import Home from './Home/Home'
import About from './About/about';
import Contact from "./Contact/contact";
import Projectss from "./Projectss/Projectss";
import Skills from "./Skills/skills";
import {BrowserRouter ,Route ,Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <header><Topbar/></header>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/about' element={<About/>} />
    <Route path='/skills' element={<Skills/>} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/Projectss' element={<Projectss/>} />
  </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;