import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiWaveSurfer } from "react-icons/gi";
import '../../css/Tsunami/Tcomponent2.css'

const TComponent2 = () => {
  return (
    <div id="information-t">
      <Container>
        <Row>
          <Col>
              <div className="flex-t">
              <FaCalendarAlt className="icons-t"/>
              <span>Date and time predicted: 10 July 2024, Around 4:30 pm  </span>
              </div>
          </Col>
          <Col>
              <div className="flex-t">
              <FaLocationDot className="icons-t"/>
              <span>Effected Areas: Calfornia, USA (epicenter)</span>
              </div>
          </Col>
          <Col>
              <div className="flex-t">
              <GiWaveSurfer className="icons-t"/>
              <span>Wave Height: 5.6 to 6 m(Devastating) </span>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TComponent2;
