import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css';
import CCLogo from '../../images/CCLogo.png';

const About = () => {
  const [ref1, inView1] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: false });
  const [ref3, inView3] = useInView({ triggerOnce: false });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (inView1) {
      const section1 = document.getElementById('Section1');
      section1.classList.add('fade-in');
    }
    if (inView2) {
      const section2 = document.getElementById('Section2');
      section2.classList.add('fade-in');
    }
    if (inView3) {
      const section3 = document.getElementById('Section3');
      section3.classList.add('fade-in');
    }
  }, [inView1, inView2, inView3]);

  return (
    <Container fluid className="bg-gray-50 mt-4">
      <Row className="justify-content-center align-items-center mt-5">
        <Col xs="auto">
          <img src={CCLogo} alt="" className="d-block mx-auto my-5 rounded-circle h-50 w-50 animate-spin" />
        </Col>
      </Row>

      <Container className="my-4 pb-3">
        <Row>
          <Col>
            <p className="fw-bold fs-1 title">
              <span className="s1">Welcome to</span>{' '}
              <span className="s2 cursor-pointer">Cosmic Coders</span>
            </p>
            <p className="mx-4 mt-4 fs-4 text-start title">
              At{' '}
              <span className="s2 cursor-pointer fw-semibold"> Cosmic Coders </span>
              , we are more than just a society. We are a thriving community dedicated to empowering students and enthusiasts in the ever-evolving realm of computing. Our mission is to ignite a passion for information technology beyond the confines of traditional coursework.
            </p>
          </Col>
        </Row>

        <Row className='mx-4 mt-4 cursor-pointer'>
          <Card
            ref={ref1}
            id="Section1"
            className={`fade ${inView1 ? 'visible' : ''} color1 text-start rounded-4 my-3 p-3 hover shadow`}
          >
            <Card.Body>
              <Card.Title className="fw-bold text-start fs-4 text-muted">
                Why Join Us?
              </Card.Title>
              <Card.Text className="fs-5 mt-1">
                <span className="fw-bold">
                  {' '}
                  <span className="fs-4">🚀</span> Exploring New Horizons:
                </span>{' '}
                We are your gateway to a world of cutting-edge ideas, knowledge, experiences, and trends in the field of computing. Through our events and activities, we help you discover uncharted territories within the realm of technology.
              </Card.Text>
              <Card.Text className="fs-5 mt-1">
                <span className="fw-bold">
                  {' '}
                  <span className="fs-4">🎓</span>Learning from Experts:
                </span>{' '}
                Our society hosts webinars and workshops led by accomplished speakers who share their insights on a diverse range of domains. These engaging talks delve into advanced research subjects, giving you a deeper understanding of what's possible in the tech world.
              </Card.Text>
              <Card.Text className="fs-5 mt-1">
                <span className="fw-bold">
                  {' '}
                  <span className="fs-4">💡</span> Unleash Your Creativity:
                </span>{' '}
                At Cosmic Coders, we encourage innovation and creativity. Our technical events include programming contests, technical quizzes, interactive discussions, and more. These activities not only challenge your skills but also spark your imagination.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>

        <Row className='mx-4 mt-3 cursor-pointer'> 
          <Card
            ref={ref2}
            id="Section2"
            className={`fade ${inView2 ? 'visible' : ''} color2 text-start rounded-4 my-3 p-3 hover shadow`}
          >
            <Card.Body>
              <Card.Title className="fw-bold text-start fs-4 text-muted">
                Who Can Join?
              </Card.Title>
              <Card.Text className="fs-5 mt-1">
                We extend a warm welcome to students from all undergraduate and graduate programs who share a common interest in the world of development. Whether you're a coding enthusiast, a tech visionary, or someone looking to make a difference through technology, you'll find your place in our community.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>

        <Row className='mx-4 mt-3 cursor-pointer'>
          <Card
            ref={ref3}
            id="Section3"
            className={`fade ${inView3 ? 'visible' : ''} color3 text-start rounded-4 my-3 p-3 hover shadow`}
          >
            <Card.Body>
              <Card.Title className="fw-bold text-start fs-4 text-muted">
                Why Choose Us?
              </Card.Title>
              <Card.Text className="fs-5 mt-1">
                <span className="fw-bold">
                  <span className="fs-4"> 🤝 </span> Community Learning:
                </span>{' '}
                By joining Cosmic Coders, you become part of a dynamic peer-to-peer learning environment. Collaborate with like-minded individuals and expand your knowledge while working on real-world projects.
              </Card.Text>
              <Card.Text className="fs-5 mt-1">
                <span className="fw-bold">
                  <span className="fs-4">🌐</span> Impact Beyond Code:
                </span>{' '}
                Beyond coding, we are committed to making a positive impact on our local businesses and communities. Together, we create solutions that transcend technology and leave a mark in the real world.
              </Card.Text>
              <Card.Text className="fs-5 mt-1">
                <span className="fw-bold">
                  <span className="fs-4"> 🌟 </span> Abundant Opportunities:
                </span>{' '}
                At Cosmic Coders, we believe in the power of connections. We regularly share job opportunities within our network, helping our members to kickstart their careers and explore exciting employment prospects.
              </Card.Text>
              <Card.Text className="fs-5 mt-1">
                <span className="fw-bold">
                  <span className="fs-4"> 🚀 </span> Staying Up-to-Date:
                </span>{' '}
                In the ever-evolving tech landscape, staying updated with the latest trends is crucial. Cosmic Coders keeps you informed and connected with the newest developments, ensuring you remain at the forefront of technology.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>

        <Row className='mt-5'>
          <Col>
            <p className="mx-4 fs-4 text-start title">
              At{' '}
              <span className="s2 cursor-pointer fw-semibold">Cosmic Coders</span>, we are more than just a club, we are a launchpad for your journey in the world of computing. Join us today and embark on an exciting adventure of learning, innovation, and growth.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;