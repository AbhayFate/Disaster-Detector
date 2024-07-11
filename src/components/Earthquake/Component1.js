import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../../css/Earthquake/Component1.css'
import Map from '../../assets/worldmap.png'

const Component1 = () => {
  return (
    <div id="map-content">
      <Container>
        <Row id="wrap-2">
          <Col>
            <h3 id="head-e-1">Predicting the Next Earthquake</h3>
            <p id="content-e-1">
              Discover cutting-edge earthquake detection technology that
              predicts the location of the next earthquake. Stay informed and
              prepared with real-time alerts and precise predictions. Be
              proactive with our advanced earthquake detector.
            </p>
          </Col>
          <Col>
            <img src={Map} alt="" id="W-MAP"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Component1;
