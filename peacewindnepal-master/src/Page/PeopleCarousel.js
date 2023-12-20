// PeopleCarousel.jsx

import React from "react";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import ow1 from "./Photo/ow1.jpg";
import ow2 from "./Photo/ow2.jpg";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const peopleData = [
  {
    name: "Krishna Giri",
    position: "CEO",
    comment:
      "Make a career of humanity. Commit yourself to the noble struggle for equal rights. You will make a better person of yourself, a greater nation of your country, and a finer world to live in",
    image: ow1,
  },
  {
    name: "Chandra Kumar Ghising",
    position: "Board Of DirectorD",
    comment:
      "Be certain that you do not die without having done something wonderful for humanity.",
    image: ow2,
  },
  // Add more people as needed
];

const PeopleCarousel = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const commentTextStyle = {
    /* Your existing styles here */
  };
  const commentTextStyleMobile = {
    position: "relative", // Adjust as needed
    zIndex: 1, // Adjust as needed
    ...commentTextStyle,
  };
  return (
    <Carousel indicators={false} pause={false}>
      {peopleData.map((person, index) => (
        <Carousel.Item
          key={index}
          style={{
            height: isMobile ? "auto" : "400px",
            backgroundColor: "#f8f9fa",
          }}
        >
          <Container className="h-100">
            <Row className="justify-content-center align-items-center h-100">
              <Col xs={12} md={4} className="text-center">
                <img
                  src={person.image}
                  alt={person.name}
                  className="img-fluid rounded-circle mb-4"
                  style={{
                    width: isMobile ? "100px" : "150px",
                    height: isMobile ? "100px" : "150px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
                <h5
                  style={{
                    fontSize: isMobile ? "20px" : "24px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  {person.name}
                </h5>
                <p style={{ fontSize: isMobile ? "16px" : "18px" }}>
                  {person.position}
                </p>
              </Col>

              <Col xs={12} md={8}>
                <Card.Body>
                  <Card.Text
                    style={isMobile ? commentTextStyleMobile : commentTextStyle}
                  >
                    <FaQuoteLeft style={{ color: "#007bff" }} />{" "}
                    <p className="lead text-muted">{person.comment}</p>{" "}
                    <FaQuoteRight style={{ color: "#007bff" }} />{" "}
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PeopleCarousel;
