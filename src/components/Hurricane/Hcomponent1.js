import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../../css/Hurricane/Hcomponent1.css'
import MAP from '../../assets/worldmap.png'

const HComponent1 = () => {
  return (
    <div id="map-content">
      <Container>
        <Row>
          <Col>
            <h3 id="head-h-1">"Track Hurricanes in Real-Time"</h3>
            <p id="content-h-1">
            Stay informed with our Hurricane Detection Website. Monitor storm paths, receive alerts, and access live updates on hurricane developments. Be prepared and stay safe with our comprehensive tracking tools. Explore now for the latest information
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

export default HComponent1;