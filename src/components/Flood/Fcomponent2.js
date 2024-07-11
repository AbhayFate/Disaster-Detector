import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaWater } from "react-icons/fa";
import '../../css/Flood/Fcomponent2.css'

const FComponent2 = () => {
  return (
    <div id="information-f">
      <Container>
        <Row>
          <Col>
              <div className="flex-f">
              <FaCalendarAlt className="icons-f"/>
              <span>Date and time predicted: 10 July 2024, Around 4:30 pm  </span>
              </div>
          </Col>
          <Col>
              <div className="flex-f">
              <FaLocationDot className="icons-f"/>
              <span>Effected Areas: Calfornia, USA (epicenter)</span>
              </div>
          </Col>
          <Col>
              <div className="flex-f">
              <FaWater className="icons-f"/>
              <span>Water-level: 2 to 6m (Devastating) </span>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FComponent2;