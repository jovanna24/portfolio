import React, { useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import projImg1 from '../assets/images/project-img1.png';
import projImg2 from '../assets/images/project-img2.png';
import projImg3 from '../assets/images/project-img3.png';
import colorSharp2 from '../assets/images/color-sharp2.png';

export const Projects = () => {
  const projects = [
    {
      title: 'KanBan Board',
      description: 'jQuery',
      imgUrl: projImg1,
      link: 'https://jovanna24.github.io/task-board_3rd_party_APIs/',
    },
    {
      title: 'Git Brewed!',
      description: '3rd Party API Integration',
      imgUrl: projImg2,
      link: 'https://jovanna24.github.io/Room-3-Project-1/',
    },
    {
      title: 'Weather Dashboard',
      description: 'Bootstrap & APIs',
      imgUrl: projImg3,
      link: 'https://jovanna24.github.io/weather_dashboard/',
    },
  ];

  const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className="proj-carousel">
        {projects.map((project, idx) => (
          <Carousel.Item key={idx} className="proj-imgbx">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="proj-link">
                <img
                    className="d-block w-100"
                    src={project.imgUrl}
                    alt={`Slide ${idx + 1}`}
                />
                <Carousel.Caption className="proj-txtx">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                </Carousel.Caption>
            </a>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Displayed projects are from bootcamp groupwork and assignments.</p>
            <p>New Projects in the works!</p>
            <ControlledCarousel />
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};
