import React,{useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCode, FaDropbox, FaUserCheck } from "react-icons/fa";

const Funfacts = () => {
    const Service = [
        { icon: <FaCode/> , text: '100k+' , servicename: 'lines of code'},
        { icon: <FaDropbox/> , text: '10+' ,servicename: 'Projects completed'},
        { icon: <FaUserCheck/> , text: '100%' ,servicename: 'Satisfaction Guarantee'},
        
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
            <h2 className='abouth2' data-aos="zoom-in">FUN FACTS</h2>
        <Row>
            {Service.map((services, index) => (
            <Col md={4} key={index}>
                <div className="services" data-aos="zoom-in">
                    <div className="service-item d-flex" data-aos="zoom-in">
                        <div className='services-icon' data-aos="zoom-in">{services.icon}</div>
                        <h3 data-aos="zoom-in">{services.text}</h3>
                    </div>
                    <p data-aos="zoom-in">{services.servicename}</p>
                </div>
            </Col>
            ))}
        </Row>
        </Container>
    );
};

export default Funfacts
