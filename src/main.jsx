import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import  'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout.jsx';
import Aboutme from './Aboutme.jsx';
import Portfolio from './Portfolio.jsx';
import Contact from './Contact.jsx';
import Port1 from './Portfolio1';
import Port2 from './Portfolio2';
import Port3 from './Portfolio3';
import Port4 from './Portfolio4';
import Port5 from './Portfolio5';
import Port6 from './Portfolio6';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Router>
      <Routes>
        <Route path='/' element={<Layout />}></Route>
        <Route path='/about' element={<Aboutme />}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/port1' element={<Port1 />}></Route>
        <Route path='/port2' element={<Port2 />}></Route>
        <Route path='/port3' element={<Port3/>}></Route>
        <Route path='/port4' element={<Port4/>}></Route>
        <Route path='/port5' element={<Port5/>}></Route>
        <Route path='/port6' element={<Port6/>}></Route>
      </Routes>
    </Router>  </React.StrictMode>,
)
