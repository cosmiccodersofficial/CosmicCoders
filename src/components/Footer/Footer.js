import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container className="d-flex flex-column align-items-center justify-content-between px-4">
        <div className="d-flex flex-column align-items-center mb-3">
          <img src={logo} alt="Logo" className="cursor-pointer logo-img rounded-circle" />
          <p className="small font-medium mt-3">© 2023 Cosmic Coders</p>
        </div>

        <Row className="d-flex flex-wrap align-items-center justify-content-center gap-1 footer-links">
          <Col xs={6} md={2} className="text-center hover col1">
            <Link to="/about" 
              className=" text-decoration-none small font-medium text-light">
              <i>About</i>
            </Link>
          </Col>
          <Col xs={6} md={2} className="text-center hover col2">
            <Link to="/contact" className="text-decoration-none small font-medium text-light">
              <i>Contact</i>
            </Link>
          </Col>
          <Col xs={6} md={4} className="text-center hover col3">
            <Link to="/terms" 
              className="text-decoration-none small font-medium text-light" style={{ whiteSpace: 'nowrap' }}>
              <i>Terms & Conditions</i>
            </Link>
          </Col>
          <Col xs={6} md={3} className="text-center hover col4">
            <Link to="/privacy" 
              className="text-decoration-none small font-medium text-light" style={{ whiteSpace: 'nowrap' }}>
              <i>Privacy Policy</i>
            </Link>
          </Col>
        </Row>

        <div className="d-flex flex-column align-items-center mt-4">
          <p className="small font-medium">Follow us on social media:</p>
          <div className="d-flex font-medium justify-content-center gap-2 hover mb-2">
            <Link to="https://github.com/cosmiccodersofficial" target='_blank' className="text-light mx-1">
              <i><FontAwesomeIcon icon={faGithub} /></i>
            </Link>
            <Link to="https://twitter.com/CosmicCodrs" target='_blank' className="text-light mx-1">
              <i><FontAwesomeIcon icon={faTwitter} /></i>
            </Link>
            <Link to="https://www.youtube.com/@cosmiccodersofficial" className="text-light mx-1">
              <i><FontAwesomeIcon icon={faYoutube} /></i>
            </Link>
            <Link to="https://www.linkedin.com/company/cosmic-coders/" target='_blank' className="text-light mx-1">
              <i><FontAwesomeIcon icon={faLinkedinIn} /></i>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;