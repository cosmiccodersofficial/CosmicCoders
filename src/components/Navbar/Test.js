import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';

const NavbarComponent = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar className={`fixed-top w-100 top-0 z-10 navbar ${visible ? 'block' : 'hidden'}`} expand="lg">
        <Container className='d-flex justify-content-between align-items-center px-6 py-2'>
          <Navbar.Brand as={Link} to="/" 
            className="cursor-pointer hover shadow bg-gray-400 p-3 text-gray-900 navbar-brand me-8">
            <span className='text-blue-900'>Cosmic</span> Coders
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="cursor-pointer d-flex hover bg-gray-400 justify-content-between align-items-center column-gap-4 shadow nav-item p-2 me-auto">
              <Nav.Link as={Link} to="/" className="text-gray-900 fw-bold">
                <svg className="fill-current h-5 w-5 mr-2 bi bi-house-door-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" fill="black"></path>
                </svg>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-gray-900 fw-bold">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/ourteam" className="text-gray-900 fw-bold">
                Our Team
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-gray-900 fw-bold">
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
              <Link to="/join" className="text-light fw-bold">
                <div className="btn cursor-pointer shadow-lg hover text-xl bg-blue-900 rounded-pill">
                  <span className="text-white fw-bold text-lg">Join Us</span>
                </div>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
