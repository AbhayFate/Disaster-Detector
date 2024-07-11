import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiWhirlwind } from "react-icons/gi";
import '../../css/Hurricane/Hcomponent2.css'

const HComponent2 = () => {
  return (
    <div id="information-h">
      <Container>
        <Row>
          <Col>
              <div className="flex-h">
              <FaCalendarAlt className="icons-h"/>
              <span>Date and time predicted: 10 July 2024, Around 4:30 pm  </span>
              </div>
          </Col>
          <Col>
              <div className="flex-h">
              <FaLocationDot className="icons-h"/>
              <span>Effected Areas: Calfornia, USA (epicenter)</span>
              </div>
          </Col>
          <Col>
              <div className="flex-h">
              <GiWhirlwind className="icons-h"/>
              <span>WindSpeed: 50 to 60kmph(Devastating) </span>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HComponent2;