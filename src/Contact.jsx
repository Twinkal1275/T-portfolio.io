import React,{useEffect} from "react";
import Toggler from "./Toggler";
import { Row } from "react-bootstrap";
import { FaPhoneAlt,FaInstagram,FaEnvelope,FaGithub,FaFacebook,FaLinkedin } from "react-icons/fa";
import Footer from "./Footer";
import { BiMessageRounded } from "react-icons/bi";
import Backtotop from "./BackTop";
import Swal from 'sweetalert2'

function Contact()
{
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("");
    const formData = new FormData(event.target);

    formData.append("access_key", "10449af3-5c1a-47a3-be54-e7eb58767adf");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    
    event.preventDefault();

    if (data.success) {
      Swal.fire({
        text: 'Your Data is Submitted Successfully',
        icon: 'success',
        confirmButtonText: 'ok',
        theme:'dark',
        customClass:{
          container:'custom-alert'
        }
      })
    } 

  };

  return(
    <>
 <div id="con">
  <Toggler/>
       <h1 className='fw-bolder' data-aos="zoom-in">Contact Us </h1>
    </div>




    <div className="container mb-5">
  <div id="contact">
    <div className="contact" data-aos="zoom-in">
       <Row>

        <div className="col-md-5">
            <p className="mt-4" data-aos="zoom-in">Phone <br/> <FaPhoneAlt className="c-icon"/> <span className="ps-2"> +917778925823 </span> </p>
            <p className="mt-4" data-aos="zoom-in">Email <br/> <FaEnvelope className="c-icon"/> <span className="ps-2"> twinkalthesiyakalpeshbhai@gmail.com </span> </p>
            <p className="mt-4" data-aos="zoom-in">Instagram <br/> <FaInstagram className="c-icon"/> <span className="ps-2"> twin_patel_1275 </span> </p>
            <p className="mt-4" data-aos="zoom-in">Github <br/> <FaGithub className="c-icon"/> <span className="ps-2"> https://github.com/Twinkal1275 </span> </p>
            <br/><br/>
           
 
        </div>
   
      <div className="col-md-7">
      <form onSubmit={onSubmit} role="form" className="php-email-form mt-4">
        <div className="row">
          <div className="col-md-6 form-group" data-aos="fade-up">
          {/* <input type="hidden" name="access_key" value="10449af3-5c1a-47a3-be54-e7eb58767adf"/> */}

            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Your Name"
              required/>
          </div>
          <div className="col-md-6 form-group mt-3 mt-md-0" data-aos="fade-up">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="form-group mt-3" data-aos="fade-up">
          <input
            type="text"
            className="form-control"
            name="subject"
            id="subject"
            placeholder="Subject"
            required
          />
        </div>
        <div className="form-group mt-3" data-aos="fade-up">
          <textarea
            className="form-control"
            name="message"
            rows={5}
            placeholder="Message"
            required
            defaultValue={""}
          />
        </div>
        <div className="my-3" data-aos="fade-up">
          <div className="loading">Loading</div>
          <div className="error-message" />
          <div className="sent-message">
            Your message has been sent. Thank you!
          </div>
        </div>
        <div >
          <button type="submit" data-aos="zoom-in"><BiMessageRounded/> Send Message</button>
        </div>
        
      </form>
      <span>{result}</span>

      </div>
      </Row>


    </div>
  </div>
</div>
 
<Backtotop/>

 <Footer/>
    
    </>
  )
}
export default Contact