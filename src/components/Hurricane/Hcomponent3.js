import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../../css/Hurricane/Hcomponent3.css'

const HComponent3 = () => {
  return (
    <div id="plan-h">
      <h3 id="head-3-h">Suggested Measures and Evactation Plan :</h3>
      <div>
        {/* <span className="plan-content">Creating an evacuation plan and taking precautionary measures for
        earthquakes, especially in regions like California, where seismic
        activity is frequent, is crucial. Here’s a comprehensive guide:
        </span> */}
        <Container id="main-h">
          <Row>
            <Col>
              <h4>Suggested Meaasure:</h4>
              <ul>
                <li>
                  1. Early Warning Systems: Utilize advanced meteorological technologies to monitor hurricanes and issue timely warnings. Ensure a reliable communication system for disseminating alerts to residents and authorities.
                </li>
                <li>
                  2. Public Awareness and Education: Conduct educational campaigns to inform the public about hurricane risks, preparation tips, and evacuation procedures. Encourage residents to create emergency kits and develop family communication plans.
                </li>
                <li>
                  3. Building Codes and Retrofitting: Enforce strict building codes that include hurricane-resistant materials and construction practices. Retrofit older buildings to enhance structural integrity against hurricane-force winds.
                </li>
                <li>
                  4.Emergency Supplies: Stockpile emergency supplies such as non-perishable food, water, medications, and first aid kits. Distribute information on where to acquire supplies and how to store them safely.
                </li>
                <li>
                  5. Evacuation Routes and Shelters: Designate and maintain clear evacuation routes inland or to designated shelters. Ensure these locations are accessible, well-marked, and equipped to accommodate evacuees with basic necessities.
                </li>
              </ul>
            </Col>
            <Col>
             <h4>Evacuation Plan:</h4> 
              <ul>
                <li>
                  1. Monitoring and Alerting: Monitor hurricane forecasts and warnings issued by meteorological agencies. Activate early warning systems and communicate evacuation orders through multiple channels
                </li>
                <li>
                  2. Immediate Action: Issue evacuation orders promptly when hurricane impacts are imminent. Direct residents to evacuate using predetermined routes away from coastal and low-lying areas.
                </li>
                <li>
                  3. Gathering Points: Establish safe assembly points or evacuation centers inland or on higher ground. Provide transportation assistance for those without means to evacuate independently.
                </li>
                <li>
                  4. Tracking Evacuees: Implement registration systems or checklists to track evacuees and ensure their safety during evacuation and sheltering.
                </li>
                <li>
                  5. Information Updates: Continuously update residents and the public on hurricane conditions, evacuation routes, and shelter availability.
                </li>
                <li>
                  6. Recovery and Assistance: Assess hurricane damage, coordinate debris removal, and facilitate the return of residents once it is safe to do so. Provide support services for displaced individuals and families.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <span className="plan-content">
        By implementing these measures and following a structured evacuation plan, communities can enhance their resilience and reduce the impact of upcoming hurricanes, ensuring the safety and well-being of residents during these severe weather events.</span>
      </div>
    </div>
  );
};

export default HComponent3;