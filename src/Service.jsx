import React,{useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFigma, FaConnectdevelop, FaDropbox } from "react-icons/fa";
import { BsFiletypePsd } from "react-icons/bs";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";

const Services = () => {
    const Service = [
        { icon: <FaConnectdevelop/> ,servicename: 'Website Developement'},
        { icon: <FaFigma/> ,servicename: 'Figma to Html'},
        { icon: <BsFiletypePsd/> ,servicename: 'Psd to Html'},
        { icon: <IoLogoJavascript/> ,servicename: 'JavaScript Development'},
        { icon: <IoLogoReact/> ,servicename: 'React JS Development'},
        { icon: <FaDropbox/> ,servicename: 'Web Hosting'},
    ];
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
    return (
        <Container>
            <h2 className='abouth2' data-aos="zoom-in">SERVICES</h2>
        <Row>
            {Service.map((services, index) => (
            <Col md={4} key={index}>
                <div className="services" data-aos="zoom-in">
                    <div className="service-item" data-aos="zoom-in">
                        <div className='services-icon' data-aos="zoom-in">{services.icon}</div>
                        <h4 data-aos="zoom-in">{services.servicename}</h4>
                    </div>
                </div>
            </Col>
            ))}
        </Row>
        </Container>
    );
};

export default Services;
