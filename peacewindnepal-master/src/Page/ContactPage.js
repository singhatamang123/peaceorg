import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaMapMarker,
  FaEnvelope,
  FaMobile,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://peace-412m.onrender.com//send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Thank you for your message! We will get back to you soon.");
        // Clear the form fields after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message. Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact" style={{ backgroundColor: "#f8f9fa", padding: "40px 0" }}>
      <Container>
        <Row>
          <Col xs={12} md={6} className="mb-4">
            <div>
              <h3 style={{ color: "navy" }}>Let's get in touch</h3>
              <p>
                Contact us with the following details and fill up the form with
                the details.
              </p>
              <div className="d-flex align-items-center">
                <FaMapMarker className="icon mr-2" />
                <p style={{ margin: "0", marginLeft: "5px", color: "blue" }}>
                  Kathmandu, Nepal
                </p>
              </div>
              <br />
              <a
                href="mailto:peacewindsnpl@gmail.com"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="d-flex align-items-center">
                  <FaEnvelope className="icon mr-2" />
                  <p style={{ margin: "0", marginLeft: "5px", color: "blue" }}>
                    peacewindsnpl@gmail.com
                  </p>
                </div>
              </a>

              <br />
              <div className="d-flex align-items-center">
                <FaMobile className="icon mr-2" />
                <p style={{ margin: "0", marginLeft: "5px", color: "blue" }}>
                  9856088770
                </p>
              </div>
              <div className="d-flex align-items-center mt-4 justify-content-center">
                <FaFacebook
                  className="icon mx-2"
                  size={30}
                  style={{ color: "navy" }}
                />
                <FaTwitter
                  className="icon mx-2"
                  size={30}
                  style={{ color: "navy" }}
                />
                <FaInstagram
                  className="icon mx-2"
                  size={30}
                  style={{ color: "navy" }}
                />
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Form name="contactForm" id="contactForm" onSubmit={handleSubmit}>
              <h3 style={{ color: "navy", marginBottom: "20px" }}>
                Contact us
              </h3>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  name="message"
                  placeholder="Your Message"
                  className="form-control"
                  style={{ height: "120px" }}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="btn-lg w-100">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
