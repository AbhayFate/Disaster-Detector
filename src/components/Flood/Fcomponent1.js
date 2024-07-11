import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../../css/Flood/Fcomponent1.css'
import MAP from '../../assets/worldmap.png'

const FComponent1 = () => {
  return (
    <div id="map-content">
      <Container>
        <Row>
          <Col>
            <h3 id="head-f-1">Monitor Flood Risks with Ease</h3>
            <p id="content-f-1">
            "Welcome to our Flood Detection Website. Stay ahead of rising waters with real-time alerts, track flood risk levels, and access flood maps. Be prepared with our comprehensive flood detection tools. Explore now for peace of mind."
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

export default FComponent1;