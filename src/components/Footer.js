import { Container, Row, Col } from 'react-bootstrap';
import logo from "../assets/images/logo.svg";
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className='align-item-center'> 
                    <Col sm={6}> 
                        <img src = {logo} alt="logo"/>
                    </Col> 
                    <Col sm={6} className="text-center text-sm-end"> 
                        <div className='social-icon'> 
                            <a href="https://www.linkedin.com/in/jovanna-jimenez-profile24/"><img src={navIcon1} alt="social"/></a>
                            <a href="https://github.com/jovanna24"><img src={navIcon2} alt="social"/></a>
                            <a href="https://www.instagram.com/jovanna_g24/"><img src={navIcon3} alt="social"/></a>
                        </div> 
                        <p>CopyRight 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}