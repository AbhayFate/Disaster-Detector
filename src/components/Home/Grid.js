import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../css/Grid.css";
import AI from '../../assets/Home-page1.jpeg'

function ContainerFluidBreakpointExample() {
  return (
    <Container fluid="md">
      <Row className="wrap1">
        <Col>
        <div>
       
          <h3 id="head-2">
            Whether you're preparing for hurricanes,earthquakes,wildfires,or
            floods,our platform offers:
          </h3>
          
          <li className="list-1">
            <ol className="list-element1">
              Accurate Predictions: Our predictive models analyze historical
              data, current weather patterns, seismic activities, and other
              relevant factors to forecast natural disasters with precision.
            </ol>
            <ol className="list-element1">
              Timely Alerts: Receive instant alerts via email or SMS when
              there's a potential threat in your area. Stay informed and take
              proactive measures to ensure your safety and the safety of your
              loved ones.
            </ol>
            <ol className="list-element1">
              Interactive Maps: Explore interactive maps that highlight
              high-risk zones and affected areas. Plan evacuation routes and
              understand the geographical impact of potential disasters.
            </ol>
            <ol className="list-element1">
              Educational Resources: Access comprehensive guides on disaster
              preparedness, survival tips, and emergency procedures. Equip
              yourself with the knowledge to mitigate risks and respond
              effectively during emergencies.
            </ol>
            <ol className="list-element1">
              Community Support: Connect with fellow users, share experiences,
              and support each other in our community forums. Together, we can
              build resilience and minimize the impact of natural disasters.
            </ol>
            <ol className="list-element1">
              Prepare, protect, and stay informed with Natural Disaster
              Predictions. Your safety is our priority. Start exploring today
              and ensure you're always one step ahead of nature's unpredictable
              forces.
            </ol>
          </li>
          </div>
        </Col>
        <Col className="Second-col">
            <img src={AI} alt="AI" className="AI"/>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerFluidBreakpointExample;
