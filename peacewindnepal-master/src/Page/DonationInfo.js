// Import your CSS file if not already imported
// import './YourCSSFile.css';

import React, { useState } from 'react';
import { Container, Row, Col, Card, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FaCreditCard, FaMobileAlt } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';
import esewa from './Photo/esewa.jpg';
import './About.css'

const DonateInfo = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Define the tooltip for the mobile icon
  const mobileTooltip = (
    <Tooltip id="mobile-tooltip">QR code</Tooltip>
  );

  return (
    <div id="donate">
     <h2
  className="fadeIn"
  style={{
    fontSize: '2.5em',
    color: '#e74c3c',
    textAlign: 'center',
    marginBottom: '1.5em',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
  }}
>
  "Make a Difference with Your Contribution"
</h2>

      <Container fluid className="py-5 bank-details-container">
        <Row className="mt-4">
          <Col md={12}>
            <Card className="bank-card bg-transparent border-0">
              <Card.Body>
                <h4 className="text-dark" style={{ fontWeight: 'bold' }}>Bank Transfer Details</h4>
                <p className="text-dark">
                  Your generous donation will directly support our initiatives. Please use the following details for bank transfers:
                </p>
                <ul className="list-unstyled">
                  <li><strong>Account Name:</strong> PEACE WINDS NEPAL</li>
                  <li><strong>Account Number:</strong> 01201017503699</li>
                  <li><strong>Bank:</strong> NABIL BANK</li>
                  <li><strong>Branch:</strong> POKHARA NEWROAD BRANCH</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={4}>
            <Card className="bank-card bg-transparent border-0">
              <Card.Body>
                <h4 className="text-dark" style={{ fontWeight: 'bold' }}>Donate via Credit Card</h4>
                <p className="text-dark">
                  Securely contribute using your credit card. Your transaction is encrypted for utmost security.
                  <span style={{color:'red'}}>Not working</span>
                </p>
                <FaCreditCard size={40} color="#3498db" />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="bank-card bg-transparent border-0">
              <Card.Body>
                <h4 className="text-dark" style={{ fontWeight: 'bold' }}>Donate via Mobile</h4>
                <p className="text-dark">
                  Conveniently make a contribution using your mobile wallet.{' '}
                  <OverlayTrigger placement="top" overlay={mobileTooltip}>
                    <span>
                      <FaMobileAlt size={40} color="#2ecc71" onClick={openModal} />
                    </span>
                  </OverlayTrigger>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Body>
          <img src={esewa} alt="Esewa QR Code" className="w-100 rounded" />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DonateInfo;
