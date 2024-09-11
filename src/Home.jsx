import React,{useEffect} from 'react';
import Toggler from './Toggler'
import { Row, Button } from 'react-bootstrap';
import { FaUserAlt, FaSuitcase } from "react-icons/fa";
import Typedtext from './Typedtext';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
    
    <Row>
      <div className="homei col-md-6 col-sm-6 col-xs-6" >
        <Toggler />
        <div className="mine" data-aos="zoom-in">
          <div className="mine1"></div>
        </div>
      </div>

      <div className="homec col-md-6 col-sm-6 col-xs-6">
          <h4 data-aos="zoom-in">HI THERE!</h4>
          <h1 data-aos="zoom-in">I'M <span className='texttype'><Typedtext/></span></h1>
          {/*  WEB DESIGNER A BLOGGER A FREELANCER */}
          <p data-aos="zoom-in">I'm a Web Designer and Front-end Developer based in Rajkot, India. I strive to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
            <Button id="btn-1" data-aos="zoom-in"><Link to="/about" className='about-link'><span className='icon'><FaUserAlt /></span>MORE ABOUT ME</Link></Button>
            <Button id="btn-2" data-aos="zoom-in"><Link to="/portfolio" className='about-link1'><span className='icon'><FaSuitcase/></span>PORTFOLIO</Link></Button>
      </div>
    </Row>
    </>
    )
  }
  export default Home