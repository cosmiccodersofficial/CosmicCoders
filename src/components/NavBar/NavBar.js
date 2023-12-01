import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => {
  const [visible, setVisible] = useState(true);
  const [expanded, setExpanded] = useState(false);

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
    <div className={`${visible ? 'block' : 'd-none'}`}>
      <Navbar expanded={expanded} className={`fixed-top w-100 top-0 z-10 navbar`} expand="lg">
        <Container className='d-flex justify-content-between align-items-center mx-8 py-2'>
          <Navbar.Brand as={Link} to="/" className="rounded-5 cursor-pointer text-start shadow bg-gray-400 p-3 text-gray-900 navbar-brand">
            <span className='text-blue-900'>Cosmic</span> Coders
          </Navbar.Brand>
          <Navbar.Toggle className={`border-3 bg-transparent p-2 navbar-toggler`} aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)}>
            <span className={`${!expanded ? 'bar' : 'd-none'}`}></span>
            <span className={`${!expanded ? 'bar' : 'btn-close btn-close-dark'}`}></span>
            <span className={`${!expanded ? 'bar' : 'd-none '}`}></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end mt-2">
            <Nav onClick={() => setExpanded(false)} className={`cursor-pointer d-flex hover bg-gray-400 align-items-center ${!expanded ? 'rounded-5' : 'rounded-2'} column-gap-4 shadow nav-item p-2 mx-auto`}>
              <Nav.Link as={Link} to="/" className="text-gray-900 fw-bold">
                <svg className="fill-current h-5 w-5 me-2 bi bi-house-door-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" fill="black"></path>
                </svg>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-gray-900 fw-bold"> About </Nav.Link>
              <Nav.Link as={Link} to="/ourteam" className="text-gray-900 fw-bold"> Our Team </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-gray-900 fw-bold"> Contact </Nav.Link>
            </Nav>
            <Nav className='mt-2' onClick={() => setExpanded(false)}>
              <Link to="/join" className="text-light fw-bold">
                <div className={`btn p-2 cursor-pointer shadow-lg hover text-xl ${!expanded ? 'rounded-5' : 'w-100 rounded-2'} bg-blue-900 `}>
                  <span className="text-white fw-bold text-lg px-1">  Join Us </span>
                </div>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;