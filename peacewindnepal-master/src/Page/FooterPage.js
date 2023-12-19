import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      className="site-footer"
      style={{
        backgroundColor: "#333",
        color: "white",
        padding: "50px 20px",
        textAlign: "center",
      }}
    >
      <h3
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        <span style={{ color: "red" }}>Peace</span>
        <span style={{ color: "white" }}>Winds</span>
        <span style={{ color: "blue" }}>Nepal</span>
      </h3>
      <Row>
        <Col md={6}>
          <address style={{ marginBottom: "20px", fontSize: "16px" }}>
            <p>
              <FaMapMarkerAlt style={{ color: "#007bff" }} /> Kathmandu, Nepal{" "}
              <br />
            </p>
            <p>
              <FaPhone style={{ color: "#007bff" }} /> 9856088770
            </p>
            <a
              href="mailto:peacewindsnpl@gmail.com"
              style={{
                textDecoration: "none",
                color: "inherit",
                gap: "10px",
              }}
            >
              <FaEnvelope style={{ color: "#007bff" }} />
              <span>peacewindsnpl@gmail.com</span>
            </a>
          </address>
        </Col>

        <Col md={6}>
          <nav style={{ marginBottom: "20px", fontSize: "18px" }}>
            <Link
              to="/"
              style={{
                marginRight: "20px",
                color: "white",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              style={{
                marginRight: "20px",
                color: "white",
                textDecoration: "none",
              }}
            >
              About
            </Link>
            <Link
              to="/contact"
              style={{
                marginRight: "20px",
                color: "white",
                textDecoration: "none",
              }}
            >
              Contact
            </Link>
            <Link
              to="/donate"
              style={{ color: "white", textDecoration: "none" }}
            >
              Donation
            </Link>
          </nav>

          <div>
            <a
              href="https://www.facebook.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebook
                style={{ color: "white", fontSize: "32px", margin: "0 15px" }}
                alt="Facebook"
              />
            </a>
            <a
              href="https://www.instagram.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaInstagram
                style={{ color: "white", fontSize: "32px", margin: "0 15px" }}
                alt="Instagram"
              />
            </a>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
