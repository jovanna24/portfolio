import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap"; 
import logo from '../assets/images/logo.svg';
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';


function NavBar() { 
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState('false');  

    useEffect(()=> {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll); 

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/jovanna-jimenez-profile24/"><img src={navIcon1} alt="LinkedIn"/></a>
                    <a href="https://www.facebook.com/jovanna.jimenez1/"><img src={navIcon2} alt="Facebook"/></a>
                    <a href="https://www.instagram.com/jovanna_g24/"><img src={navIcon3} alt="Instagram"/></a>
                </div> 
                <a href="#contact"><button className="vvd" type="button"><span>Let's Connect!</span></button></a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
} 

export { NavBar };