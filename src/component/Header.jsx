
import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowRight, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './css/Header.css';
import { ImWhatsapp } from 'react-icons/im';

const Header = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Function to update the state when scrolling
    const handleScroll = () => {
      if (window.scrollY > 300) { // Change color after scrolling 50px
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add the event listener on component mount
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
    <Navbar expand="lg" className="bg-white font-weight-bold navbar-custom sticky-top" style={{
      paddingLeft: '20px', paddingRight: '20px',
      background: scrolled ? '#fff' : 'linear-gradient(to right, #BBF7D1, #BFDCFE)',borderBottom: scrolled ? '0.5px solid #ddd' : 0,
      boxShadow: scrolled ? 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px' :''
    }}>
      <Container fluid>
        <Navbar.Brand href="#" className="d-flex align-items-center">

          <Navbar.Brand style={{ fontSize: '38px', }} className="tangerine-bold" href="#">Iyappan Mani</Navbar.Brand>
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#work" className="nav-link-hover fw-medium me-4">Home</Nav.Link>
            <Nav.Link href="#services" className="nav-link-hover fw-medium me-4">Skills</Nav.Link>
            <Nav.Link href="#clients" className="nav-link-hover fw-medium me-4">Resume</Nav.Link>
            {/* <Nav.Link  href="#about" className="nav-link-hover fw-bold me-4">contact</Nav.Link> */}
            <Button className="btn-small d-flex align-items-center fw-bold">
              Contact <FaArrowRight className="arrow-icon fw-bold" />
            </Button>
            <Nav.Link href={`https://www.facebook.com`} className="nav-link-hoverRed fw-bold me-4"><FaGithub /></Nav.Link>
            <Nav.Link href={`https://www.instagram.com`} className="nav-link-hover fw-bold me-4"><FaLinkedin /></Nav.Link>
            <Nav.Link href={`https://wa.me/${'+919655755416'}?text=${encodeURIComponent('Hi')}`} className="nav-link-hoverGreen fw-bold me-4"><ImWhatsapp /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header