// About.jsx

import React, { useState } from "react";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import { AiOutlineHeart, AiOutlineFund, AiOutlineAim } from "react-icons/ai";
import flood from "./flood.jpg";
import e from "./e.jpg";
import photo1 from "../Gallery/a.jpg";
import photo2 from "../Gallery/b.jpg";
import photo3 from "../Gallery/c.jpg";
import photo4 from "../Gallery/d.jpg";
import photo6 from "../Gallery/f.jpg";
import photo7 from "../Gallery/g.jpg";
import photo8 from "../Gallery/h.jpg";
import "./About.css";

const photos = [photo1, photo2, photo3, photo4, photo6, photo7, photo8];

const ImageCard = ({ src, alt, onClick }) => (
  <Col lg={4} md={6} className="mb-4">
    <Card className="h-100 gallery-card">
      <Card.Img
        src={src}
        className="w-100 shadow-1-strong rounded cursor-pointer gallery-image"
        alt={alt}
        onClick={() => onClick(src, alt)}
      />
    </Card>
  </Col>
);

const CauseCard = ({ icon, title, description }) => (
  <Col md={4} className="mb-4">
    <Card className="h-100 cause-card">
      <Card.Body className="text-center">
        <div className="cause-icon">{icon}</div>
        <Card.Title className="mt-3 mb-3 font-weight-bold cause-title">
          {title}
        </Card.Title>
        <Card.Text className="cause-description">{description}</Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  const openModal = (src, alt) => {
    setModalImage(src);
    setModalAlt(alt);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage("");
    setModalAlt("");
  };

  return (
    <div id="About">
      <Container className="about-container">
        <h2 className="section-title">Our Work</h2>
        <Row>
          <Col md={6} className="mb-4">
            <img src={flood} alt="NGO Work" className="img-fluid work-image" />
          </Col>
          <Col md={6} className="mb-4">
            <img src={e} alt="NGO Work" className="img-fluid work-image" />
          </Col>
          <Col md={6}>
            <p className="work-description">
              “Each day holds a surprise. But only if we expect it can we see,
              hear, or feel it when it comes to us. Let's not be afraid to
              receive each day's surprise, whether it comes to us as sorrow or
              as joy. It will open a new place in our hearts, a place where we
              can welcome new friends and celebrate more fully our shared
              humanity.”
            </p>
          </Col>
          <Col md={6}>
            <p className="work-description">
              Here, describe the work done by the NGO in this section. You can
              provide details, achievements, goals, or any relevant information
              about the NGO's activities, social projects, or initiatives.
            </p>
          </Col>
        </Row>

        <h2 className="section-title">Gallery</h2>
        <Row xs={1} md={3} className="g-4">
          {photos.map((photo, index) => (
            <ImageCard
              key={index}
              src={photo}
              alt={`Photo ${index + 1}`}
              onClick={openModal}
            />
          ))}
        </Row>

        <h2 className="section-title">Our Services</h2>
        <Row xs={1} md={3} className="g-4">
          <CauseCard
            icon={<AiOutlineHeart size={60} color="royalblue" />}
            title="Facilities"
            description="Description for Facilities."
          />
          <CauseCard
            icon={<AiOutlineFund size={60} color="green" />}
            title="Fund"
            description="Description for Fund."
          />
          <CauseCard
            icon={<AiOutlineAim size={60} color="goldenrod" />}
            title="Education"
            description="Description for Education."
          />
        </Row>
      </Container>

      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Body>
          <img src={modalImage} alt={modalAlt} className="w-100 rounded" />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default About;
