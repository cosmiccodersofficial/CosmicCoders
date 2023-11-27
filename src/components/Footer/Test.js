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
        <div className="d-flex flex-column align-items-center mb-4">
          <img src={logo} alt="Logo" className="cursor-pointer logo-img rounded-circle" />
          <p className="text-sm font-weight-semibold font-medium mt-2">© 2023 Cosmic Coders</p>
        </div>

        <Row className="d-flex flex-row justify-content-center gap-1">
          <Col className="text-center">
            <Link to="/about" className="text-sm hover font-weight-semibold font-medium hover:text-gray-400">
              About
            </Link>
          </Col>
          <Col className="text-center">
            <Link to="/contact" className="text-sm hover font-weight-semibold font-medium hover:text-gray-400">
              Contact
            </Link>
          </Col>
          <Col className="text-center">
            <Link to="/terms" className="text-sm hover font-weight-semibold font-medium hover:text-gray-400">
              Terms & Conditions
            </Link>
          </Col>
          <Col className="text-center">
            <Link to="/privacy" className="text-sm hover font-weight-semibold font-medium hover:text-gray-400">
              Privacy Policy
            </Link>
          </Col>
        </Row>

        <div className="d-flex flex-column align-items-center mt-4">
          <p className="text-sm font-semibold font-medium">Follow us on social media:</p>
          <div className="font-weight-semibold justify-content-center gap-4 hover mt-2">
            <Link to="https://github.com/cosmiccodersofficial" target='_blank' className="text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link to="https://twitter.com/CosmicCodrs" target='_blank' className="text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link to="https://www.youtube.com/@cosmiccodersofficial" className="text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
            <Link to="https://www.linkedin.com/company/cosmic-coders/" target='_blank' className="text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
