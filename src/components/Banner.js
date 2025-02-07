import { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap"; 
import { ArrowRightCircle } from "react-bootstrap-icons"; 
import headerImg from "../assets/images/header-img1.svg"; 
import 'animate.css'; 
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0); 
    const [isDeleting, setIsDeleting] = useState(false); 
    const toRotate= ["Web Developer", "Web Designer", "UI/UX Designer"]; 
    const [text, setText] = useState(''); 
    // delta will determine how fast each letter will come after the first one is typed
    const [delta, setDelta] =  useState(300 - Math.random() * 100);
    // Time between transition between each word 
    const period = 2000; 

    const tick = () => {
        let i = loopNum % toRotate.length; 
        let fullText = toRotate[i]; 
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length +1); 

        setText(updatedText); 

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true); 
            setDelta(period); 
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false); 
            setLoopNum(loopNum +1); 
            setDelta(500);
        }
    }


    useEffect(()=> {
        let ticker = setInterval(() => {
            tick();
        }, delta) 
        return () => { clearInterval(ticker)};
    },);


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs = {12} md ={6} xl={7}>
                        <TrackVisibility> 
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <span className="tagline">Welcome to my Portfolio</span> 
                            <h1>{`Hi I'm Jovanna, `}<span className="wrap">{text}</span></h1>
                            <p>
                            I'm passionate about software engineering and currently enrolled in a Fullstack-Software Engineering Bootcamp at Arizona State University. As a prior EMT and Physician Assistant student, I thrive in fast-paced environments where teamwork and problem-solving are essential. When not coding, I enjoy a good cup of coffee and rooting for the Dodgers!
                            </p>
                            <a href="#contact"><button >Let's connect<ArrowRightCircle size ={25} /></button></a>
                            </div>
                        }
                        </TrackVisibility>
                    </Col> 
                    <Col xs = {12} md ={6} xl={7}> 
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}