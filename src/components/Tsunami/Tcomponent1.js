import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../../css/Tsunami/Tcomponent1.css'
import MAP from '../../assets/worldmap.png'

const TComponent1 = () => {
  return (
    <div id="map-content">
      <Container>
        <Row>
          <Col>
            <h3 id="head-t-1">Predicting the Next Tsunami</h3>
            <p id="content-t-1">
            "Stay informed with our Tsunami Detection App. Receive real-time alerts, track potential threats, and ensure safety with timely notifications and preparedness tips. Download now for peace of mind wherever you are."
            </p>
          </Col>
          <Col>
            <img src={MAP} alt="" id="W-MAP"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TComponent1;