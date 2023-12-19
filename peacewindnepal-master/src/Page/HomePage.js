import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Row, Col } from "react-bootstrap";
import help from "./help.jpg";
import secondImage from "./second.jpg";
import Chatbox from "../Chat/Chatbox.js";
import PeopleCarousel from "./PeopleCarousel.js";
import rs from "./Photo/rs.jpg";
import ra from "./Photo/ra.jpg";
import rk from "./Photo/rk.jpg";

const carouselImageStyle = {
  height: "583px",
  objectFit: "cover", // This will ensure your images are always centered and cover the carousel
};

const donateButtonStyle = {
  display: "block",
  width: "150px",
  margin: "20px auto",
  padding: "10px 15px",
  borderRadius: "5px",
  background: "rgba(255, 165, 0, 0.8)",
  color: "white",
  textTransform: "uppercase",
  border: "none",
  cursor: "pointer",
  textDecoration: "none",
};

const imageStyle = {
  width: "100%",
  borderRadius: "5%",
  height: "auto",
};

const textContainerStyle = {
  maxWidth: "600px",
  color: "black",
  marginTop: "20px",
};

const whoWeAreSectionStyle = {
  background: "rgba(253, 228, 228, 0.9)",
  padding: "20px",
  borderRadius: "15px",
  textAlign: "left",
  marginBottom: "50px",
};

const h2Style = {
  color: "red",
  fontWeight: "bold",
  marginTop: "0",
  fontSize: "36px",
  padding: "10px 0",
};

const pStyle = {
  fontFamily: "serif",
  marginTop: "10px",
};

const carouselItems = [
  {
    image: ra,
    title: "Beautiful Scenery",
    text: "Enjoy the breathtaking view of nature.",
  },
  {
    image: rs,
    title: "Adventure Awaits",
    text: "Embark on a journey to new horizons with us.",
  },
  {
    image: rk,
    title: "Discover the Unknown",
    text: "Explore the wonders of the world.",
  },
  {
    image: secondImage,
    title: "Discover the Unknown",
    text: "Explore the wonders of the world.",
  },
];

const HomePage = () => {
  return (
    <div>
      <Carousel interval={4000} indicators={false}>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={item.image}
              alt={item.title}
              style={carouselImageStyle}
            />
            <Carousel.Caption>
              <h5
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                {item.title}
              </h5>
              <p style={{ fontSize: "18px" }}>{item.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <section style={whoWeAreSectionStyle}>
        <Row>
          <Col xs={12} md={6}>
            <img src={help} alt="Description" style={imageStyle} />
          </Col>
          <Col xs={12} md={6}>
            <div style={textContainerStyle}>
              <h2 style={h2Style}>Who We Are?</h2>
              <p style={pStyle}>
                Peace Winds Nepal is an organization that focuses on empowering
                Nepal's children, youth, men, and women. Peace Winds Nepal shall
                remain an efficient, self-sustainable, and independent
                humanitarian organization committed to providing immediate
                relief to human suffering and reducing vulnerability under the
                Fundamental Principles of Peace Winds Nepal. Through its network
                of workers throughout the country working closely with
                communities and governmental and non-governmental organizations
                in a democratic, transparent, and participatory way.
              </p>
              <Link to="/donate" style={donateButtonStyle}>
                Donate Now
              </Link>
            </div>
          </Col>
        </Row>
      </section>
      <PeopleCarousel />
      <Chatbox />
    </div>
  );
};

export default HomePage;
