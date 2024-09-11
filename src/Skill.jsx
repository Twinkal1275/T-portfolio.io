import React,{useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Skills = () => {
  const skills = [
    { name: 'HTML', value: '95%' },
    { name: 'CSS', value: '95%' },
    { name: 'JAVASCRIPT', value: '80%' },
    { name: 'JQUERY', value: '75%' },
    { name: 'BOOTSTRAP', value: '90%' },
    { name: 'REACTJS', value:'85%'},
    { name: 'WORDPRESS', value: '60%' },
    
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
        <h2 className='abouth2 mb-5' data-aos="zoom-in">PROGRAMMING SKILLS</h2>
      <Row>
        {skills.map((skill, index) => (
          <Col md={6} key={index}>
            <div className="programming-skills" data-aos="zoom-in">
              <div className="skill-item" data-aos="zoom-in">
                <p data-aos="zoom-in">{skill.name}</p>
                <div className="skill-bar" data-aos="zoom-in">
                  <div className="skill-fill" data-aos="zoom-in" style={{ width: skill.value }}>
                    <div className="progress-value" data-aos="zoom-in">{skill.value}</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
