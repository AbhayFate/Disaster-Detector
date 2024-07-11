import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaCloudscale } from "react-icons/fa";
import '../../css/Earthquake/Component2.css'

const Component2 = () => {
  return (
    <div id="information-e">
      <Container>
        <Row>
          <Col>
              <div className="flex-e">
              <FaCalendarAlt className="icons-e"/>
              <span>Date and time predicted: 10 July 2024, Around 4:30 pm  </span>
              </div>
          </Col>
          <Col>
              <div className="flex-e">
              <FaLocationDot className="icons-e"/>
              <span>Effected Areas: Calfornia, USA (epicenter)</span>
              </div>
          </Col>
          <Col>
              <div className="flex-e">
              <FaCloudscale className="icons-e"/>
              <span>Magnitude: 5.6 to 6 (Devastating) </span>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Component2;
