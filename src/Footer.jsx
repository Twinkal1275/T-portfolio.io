import React,{useEffect} from "react";
import { Row } from "react-bootstrap";
import Backtotop from "./BackTop";
import { FaInstagram, FaLinkedinIn, FaFacebook, FaGithub, FaEnvelope } from "react-icons/fa";
function Footer()
{
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
    return(
        <>
        <div id="footer">
         <Row className="p-5">
            <div className="col-md-4">
                <h1 className="fw-bold text-center " data-aos="zoom-in">Get In Touch</h1>
                <p className=" fs-5" data-aos="zoom-in">I am Web Designer and <br/> Front End Devloper from Rajkot, India. </p>
                <ul className="f-icon">
                    <li data-aos="zoom-in"><a href="https://www.instagram.com/twin.patel1275?igsh=c2ljYW5lcHdzOXV2"><FaInstagram/></a></li>
                    <li data-aos="zoom-in"><a href="https://www.facebook.com/profile.php?id=100052942215764&mibextid=ZbWKwL"><FaFacebook/></a></li>
                    <li data-aos="zoom-in"><a href="https://www.linkedin.com/in/twin-patel-20b744316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn/></a></li>
                </ul>
            </div>


       <div className="col-md-8">
        <Row>
            <div className="col-md-6">
            <div className="github" data-aos="zoom-in">
            <li><a href="https://github.com/Twinkal1275" className="text-center fs-1 git"><FaGithub className="gits"/></a></li>
            <li><a href="https://github.com/Twinkal1275">https://github.com/Twinkal1275</a></li>
             </div>
            </div>

            <div className="col-md-6">
            <div className="envlope github" data-aos="zoom-in">
            <li><a href="#" className="text-center fs-1 git"><FaEnvelope className="gits"/></a></li>
            <li><a href="#">twinkalthesiyakalpeshbhai@gmail.com</a></li>
            </div>
            </div>
        </Row>
  

       </div>
            
         </Row>
<Backtotop/>
        </div>
        </>
    )
}
export default Footer