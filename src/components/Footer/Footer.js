import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container className="d-flex flex-column align-items-center justify-content-between px-4">
        <div className="d-flex flex-column align-items-center mb-3">
          <img src={logo} alt="Logo" className="cursor-pointer logo-img rounded-circle" />
          <p className="small font-medium mt-3">© 2023 Cosmic Coders</p>
        </div>

        <Row className="d-flex flex-wrap align-items-center justify-content-center gap-1 footer-links">
          <Col xs={6} md={2} className="text-center hover col1">
            <Link to="/about" 
              className=" text-decoration-none small font-medium icon">
              About
            </Link>
          </Col>
          <Col xs={6} md={2} className="text-center hover col2">
            <Link to="/contact" className="text-decoration-none small font-medium icon">
              Contact
            </Link>
          </Col>
          <Col xs={6} md={4} className="text-center hover col3">
            <Link to="/terms" 
              className="text-decoration-none small font-medium icon" style={{ whiteSpace: 'nowrap' }}>
              Terms & Conditions
            </Link>
          </Col>
          <Col xs={6} md={3} className="text-center hover col4">
            <Link to="/privacy" 
              className="text-decoration-none small font-medium icon" style={{ whiteSpace: 'nowrap' }}>
              Privacy Policy
            </Link>
          </Col>
        </Row>

        <div className="d-flex flex-column align-items-center mt-4">
          <p className="small font-medium">Follow us on social media:</p>
          <div className="d-flex font-medium justify-content-center gap-2 hover mb-2">
            <Link to="https://github.com/cosmiccodersofficial" target='_blank' className="icon mx-1">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link to="https://twitter.com/CosmicCodrs" target='_blank' className="icon mx-1">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link to="https://www.youtube.com/@cosmiccodersofficial" className="icon mx-1">
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
            <Link to="https://www.linkedin.com/company/cosmic-coders/" target='_blank' className="icon mx-1">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;