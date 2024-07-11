import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../css/Tsunami/Tcomponent3.css";

const TComponent3 = () => {
  return (
    <div id="plan-t">
      <h3 id="head-3-t">
        Here are suggested measures and an evacuation plan for a striking
        tsunami:
      </h3>
      <div>
        {/* <span className="plan-content">Creating an evacuation plan and taking precautionary measures for
        earthquakes, especially in regions like California, where seismic
        activity is frequent, is crucial. Here’s a comprehensive guide:
        </span> */}
        <Container id="main-t">
          <Row>
            <Col>
              <h4>Measures:</h4>
              <ul>
                <li>
                  1. Early Warning Systems: Ensure robust systems are in place
                  to detect tsunamis early. Utilize seismic monitoring, ocean
                  buoys, and other sensors to provide timely alerts to
                  authorities and the public.
                </li>
                <li>
                  2. Public Education: Conduct ongoing public education
                  campaigns to raise awareness about tsunami risks and
                  preparedness. Provide information on warning signs, evacuation
                  procedures, and safe assembly points.
                </li>
                <li>
                  3. Evacuation Routes: Establish and clearly mark primary and
                  secondary evacuation routes leading inland and to higher
                  ground. Ensure routes are accessible and well-maintained.
                </li>
                <li>
                  4. Vertical Evacuation Structures: Identify and designate
                  tall, sturdy buildings or structures as vertical evacuation
                  sites in coastal areas where horizontal evacuation is not
                  feasible. Educate residents on their locations and use.
                </li>
                <li>
                  5. Community Preparedness: Encourage community organizations
                  and local leaders to develop neighborhood emergency plans.
                  Foster cooperation and coordination among residents for swift
                  evacuation and assistance.
                </li>
              </ul>
            </Col>
            <Col>
              <h4>Suggested Measures:</h4>
              <ul>
                <li>
                  1. Warning Phase:
                  <br />
                  (i) Alert Notification: Upon receiving a tsunami warning,
                  activate warning systems to alert residents through sirens and
                  other communication methods.
                  <br />
                  (ii) Information Dissemination: Broadcast clear instructions
                  on evacuation routes, assembly points, and safe locations
                  through local authorities and media.
                </li>
                <li>
                  2. Evacuation Phase: <br />
                  (i)Immediate Action: Residents should evacuate promptly upon
                  hearing the warning. Follow designated evacuation routes
                  inland or to higher ground.
                  <br />
                  (ii)Vertical Evacuation: If in a designated vertical
                  evacuation structure, move to upper floors or roof as
                  directed.
                </li>
                <li>
                  3. Assembly and Safety: <br />
                  (i) Gathering Points: Encourage residents to assemble at
                  pre-designated safe locations away from the coast and
                  flood-prone areas. <br />
                  (ii) Accountability: Ensure accountability and safety of all
                  evacuees. Use checklists or registers if feasible to track
                  those who have evacuated.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <span className="plan-content">
        By implementing these measures and following a structured evacuation plan, communities can enhance their readiness and response to a striking tsunami, ultimately saving lives and mitigating damage.
        </span>
      </div>
    </div>
  );
};

export default TComponent3;
