import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../css/Flood/Fcomponent3.css";

const FComponent3 = () => {
  return (
    <div id="plan-f">
      <h3 id="head-3-f">
        Here are suggested measures and an evacuation plan for an upcoming flood
        situation:
      </h3>
      <div>
        {/* <span className="plan-content">Creating an evacuation plan and taking precautionary measures for
        earthquakes, especially in regions like California, where seismic
        activity is frequent, is crucial. Here’s a comprehensive guide:
        </span> */}
        <Container id="main-f">
          <Row>
            <Col>
              <h4>Suggested Measure: </h4>
              <ul>
                <li>
                  1. Early Warning Systems: Implement and maintain robust flood
                  monitoring and early warning systems. Utilize rainfall gauges,
                  river level sensors, and meteorological forecasts to provide
                  timely alerts to authorities and residents.
                </li>
                <li>
                  2. Public Awareness and Education: Conduct regular public
                  awareness campaigns about flood risks, warning signs, and
                  evacuation procedures. Educate residents on how to prepare
                  emergency kits and develop family communication plans.
                </li>
                <li>
                  3. Floodplain Management: Enforce zoning and land use
                  regulations that restrict development in flood-prone areas.
                  Promote sustainable land management practices to reduce runoff
                  and enhance natural drainage.
                </li>
                <li>
                  4. Infrastructure Improvements: Invest in infrastructure
                  projects such as levees, floodwalls, and drainage systems to
                  mitigate flood impacts. Maintain and upgrade existing
                  infrastructure to ensure effectiveness during flood events.
                </li>
                <li>
                  5. Community Preparedness: Facilitate community workshops and
                  drills to rehearse evacuation procedures and emergency
                  response protocols. Foster partnerships with local
                  organizations and volunteers for coordinated disaster response
                  efforts.
                </li>
              </ul>
            </Col>
            <Col>
              <h4>Evacuation Plan: </h4>
              <ul>
                <li>
                  1. Monitoring and Alerting: Continuously monitor weather
                  forecasts and river levels. Activate early warning systems and
                  notify residents of potential flooding through various
                  communication channels
                </li>
                <li>
                  2. Immediate Action: Issue evacuation orders promptly when
                  flood risks escalate. Direct residents to evacuate using
                  predetermined routes away from flood-prone areas.
                </li>
                <li>
                  3. Gathering Points: Designate safe assembly points or
                  evacuation centers inland or on higher ground. Ensure these
                  locations are equipped with basic amenities and staffed with
                  trained personnel.
                </li>
                <li>
                  4.Tracking Evacuees: Use registration systems or checklists to
                  account for evacuees and ensure their safety.
                </li>
                <li>
                  5. Information Updates: Provide regular updates on flood
                  conditions, road closures, and safety instructions to
                  evacuated residents and the public.
                </li>
                <li>
                  6. Evaluation: Conduct a post-event review to evaluate the
                  effectiveness of the evacuation plan and identify areas for
                  improvement.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <span className="plan-content">
          By implementing these measures and following a structured evacuation
          plan, communities can better prepare for and respond to upcoming flood
          situations, minimizing risks to life and property during natural
          disasters.
        </span>
      </div>
    </div>
  );
};

export default FComponent3;
