import React,{useEffect} from 'react'
import Toggler from './Toggler'
import { Row } from 'react-bootstrap'
import Typedtext from './Typedtext'
import { PiDownloadFill } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";
import Footer from './Footer';
import Funfacts from './FunFect';
import Skills from './Skill';
import Services from './Service';
import resume from './Images/resume.pdf'
import { FaFacebook, FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa';
import Backtotop from './BackTop';

const Aboutme = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>

    <div id="abouts">
      <Toggler/>
       <h1 className='fw-bolder' data-aos="zoom-in">About Me </h1>
    </div>

    <div id="about-info">
   <Row>
    <div className="col-md-5" >
     <div className="pic" >
      <div className="pic1">
        <p>I am available on : </p>
        <ul>
          <li><a href='https://www.facebook.com/profile.php?id=100052942215764&mibextid=ZbWKwL'> <FaFacebook/></a></li>
          <li><a href='https://www.instagram.com/twin.patel1275?igsh=c2ljYW5lcHdzOXV2'> <FaInstagram/> </a></li>
          <li><a href='https://wa.link/ipuqzp'> <FaWhatsapp/> </a></li>
          <li><a href='https://github.com/Twinkal1275'> <FaGithub/> </a></li>
        </ul>
      </div>
     </div>
    </div>


    <div className="col-md-7">
    <h1 className='types' data-aos="zoom-in">I'M  <span className='texttype texts'> <Typedtext/></span></h1>

    <Row id="info">
      <div className="col-md-4" data-aos="zoom-in">
        <Row>
        <div className="col-md-6 name" data-aos="zoom-in">
          <p>Name:</p>
        </div>

        <div className="col-md-6 names" data-aos="zoom-in">
          <p>Twinkal</p>
        </div>

        <div className="col-md-6 name" data-aos="zoom-in">
          <p>Birthdate:</p>
        </div>

        <div className="col-md-6 names" data-aos="zoom-in">
          <p>12 July, 2005</p>
        </div>


        <div className="col-md-6 name" data-aos="zoom-in">
          <p>Experience:</p>
        </div>

        <div className="col-md-6 names" data-aos="zoom-in">
          <p>6 Month</p>
        </div>


        <div className="col-md-6 name" data-aos="zoom-in">
          <p>Address:</p>
        </div>

        <div className="col-md-6 names" data-aos="zoom-in">
          <p>Rajkot</p>
        </div>
        </Row>
      </div>

      <div className="col-md-6" data-aos="zoom-in">
      <Row>
        <div className="col-md-4 name" data-aos="zoom-in">
          <p>Languages:</p>
        </div>

        <div className="col-md-8 names" data-aos="zoom-in">
          <p>Gujarati, Hindi, English</p>
        </div>

        <div className="col-md-4 name" data-aos="zoom-in">
          <p>Phone:</p>
        </div>

        <div className="col-md-8 names" data-aos="zoom-in">
          <p>+91 77789 25823</p>
        </div>


        <div className="col-md-4 name" data-aos="zoom-in">
          <p>Email:</p>
        </div>

        <div className="col-md-8 names" data-aos="zoom-in">
          <p>twinkalthesiyakalpeshbhai@gmail.com</p>
        </div>


        <div className="col-md-4 name" data-aos="zoom-in">
          <p>Github:</p>
        </div>

        <div className="col-md-8 names" data-aos="zoom-in">
          <p>https://github.com/Twinkal1275</p>
        </div>


       
        </Row>
      </div>
    </Row>
    
    <button type='button' className='cv' data-aos="zoom-in"><PiDownloadFill className='fs-4'/>
    <a href={resume} download="Twinkal_Thesiya_Resume" className="download-link">
 DOWNLOAD MY CV</a></button>
    </div>
   </Row>

    </div>

<div className="container mt-5">
    <hr className='mt-5'/>

<Funfacts/>
</div>

    <div className="container mt-5">
      <hr className='mt-5'/>
  <div id="resume">
    <div className="resume">
     
      <div className="row">
      <div class="col-lg-6">
          <h3 class="resume-title" data-aos="zoom-in">Education</h3>
          <div class="resume-item">
          <p data-aos="zoom-in"><FaRegCalendarAlt/><em className='ps-1'>  2023 - 2024 </em></p>
            <h5 data-aos="zoom-in">Front end Devlopment</h5>
            <p data-aos="zoom-in">
             I am Web designer and Front End Devloper. I completed my course in Tops Technology, Rajkot.
            </p>
            <br/><br/>
          </div>
          <div class="resume-item" data-aos="zoom-in">
          <p data-aos="zoom-in"><FaRegCalendarAlt/><em className='ps-1'> 2022 - 2025</em></p>
            <h5 data-aos="zoom-in">B.com With Computer Science</h5>
            <p data-aos="zoom-in">
             currently I am doing B.com with Computer Science in M . J . Kundaliya College in Rajkot.
            </p>
            <br/><br/>
          </div>
          <div class="resume-item" data-aos="zoom-in">
          <p data-aos="zoom-in"><FaRegCalendarAlt/><em className='ps-1'> 2021 - 2022</em></p>
            <h5 data-aos="zoom-in">Higher Secondary</h5>
            <p data-aos="zoom-in">
             I completed my 12<sup>th</sup> in Mazahar School in Rajkot. I completed my 12<sup>th</sup> with 80%.
            </p>
          </div>
      </div>
        <div class="col-lg-6">
          <h3 class="resume-title" data-aos="zoom-in"> Experience</h3>
          <div class="resume-item" data-aos="zoom-in">
          <p data-aos="zoom-in"><FaRegCalendarAlt/><em className='ps-1'> 2024</em></p>
            <h5 data-aos="zoom-in">Web Designer - Gem Computer</h5>
            <p>
             currently I am doing internship with Gem Computer.So i have Experience in IT company.
            </p>
            <br/><br/>
          </div>
          <div class="resume-item" data-aos="zoom-in">
          <p data-aos="zoom-in"><FaRegCalendarAlt/><em className='ps-1'> 2023</em></p>
            <h5 data-aos="zoom-in">Insurance Agency</h5>
            <p data-aos="zoom-in">
             I have six months of Experience in Insurance Agency. So I have good Comunication Skill.
            </p>
            <br/><br/>
          </div>
        </div>
      </div>
    
    
    </div>
  </div>
</div>

<div className="container">
  <hr className='mt-5'/>
  <Skills/>
</div>

<div className="container mb-5">
  <hr className='mt-5'/>
  <Services/>
</div>
<Backtotop/>
<Footer/>
    </>
  )
}

export default Aboutme
