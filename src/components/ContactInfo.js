import { Row, Container, Col } from 'react-bootstrap'; 
import contactImg from '../assets/images/contact-img.svg'; 

export const ContactInfo = ({ email, phone }) => {
    return(
        <section className='contact' id='contact'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImg} alt='contact-image' className='img-fluid'/>
                    </Col>
                    <Col md={6}>
                        <h2>Get in Touch!</h2>
                        <Row className='align-items-center'>
                            <Col md={12}>
                                <h3>Phone: (520)233-4788</h3>
                            </Col>
                        </Row>
                        <Row className='align-items-center'>
                            <Col md={12}>
                                <h3>Email: jovannajimenez@gmail.com</h3>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}