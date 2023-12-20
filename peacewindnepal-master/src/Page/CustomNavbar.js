// CustomNavbar.jsx

import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaHeart, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ScrollToTopButton from './ScrollToTopButton';
import logo from './logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ScrollToTopButton.css';

const CustomNavbar = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  const navLinkStyle = (isActive) => ({
    color: isActive ? '#007bff' : '#333', // Adjusted color for active link
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.4s',
    fontWeight: 'bold',
  });

  return (
    <>
      <Navbar
        bg={isSticky ? '#fff' : 'transparent'} // Updated background color
        variant="light"
        expand="lg"
        className={`navbar ${isSticky ? 'sticky' : ''}`}
        style={{ transition: 'all 0.4s', marginBottom: '-40px', borderBottom: '1px solid #ddd' }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ borderRadius: '50%', overflow: 'hidden' }}>
            <img src={logo} width="100" height="90" className="d-inline-block align-top" alt="Bird Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon">
              <FaBars style={{ color: '#87CEEB', fontSize: '1.5em' }} />
            </span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="ms-auto">
              <NavLink to="/" onClick={() => handleNavLinkClick('#home')} isActive={activeLink === '#home'} navLinkStyle={navLinkStyle}>
                Home
              </NavLink>
              <NavLink to="/about" onClick={() => handleNavLinkClick('#about')} isActive={activeLink === '#about'} navLinkStyle={navLinkStyle}>
                About
              </NavLink>
              <NavLink to="/contact" onClick={() => handleNavLinkClick('#contact')} isActive={activeLink === '#contact'} navLinkStyle={navLinkStyle}>
                Contact
              </NavLink>
              <NavLink to="/donate" onClick={() => handleNavLinkClick('#donate')} isActive={activeLink === '#donate'} navLinkStyle={navLinkStyle}>
                <FaHeart style={{ fontSize: '1.5em', marginRight: '5px', color: 'red' }} />
                Donate
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', marginTop: '0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* ... Other Content ... */}
        </div>
        <ScrollToTopButton />
      </div>
    </>
  );
};

const NavLink = ({ to, onClick, isActive, children, navLinkStyle }) => (
  <Nav.Link as={Link} to={to} onClick={onClick} style={navLinkStyle(isActive)}>
    {children}
  </Nav.Link>
);

export default CustomNavbar;
