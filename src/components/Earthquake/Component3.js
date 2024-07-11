import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../../css/Earthquake/Component3.css'
const Component3 = () => {
  return (
    <div id="plan-e">
      <h3 id="head-3-e">Suggested Measures and Evactation Plan :</h3>
      <div>
        <span className="plan-content">Creating an evacuation plan and taking precautionary measures for
        earthquakes, especially in regions like California, where seismic
        activity is frequent, is crucial. Here’s a comprehensive guide:
        </span>
        <Container id="main-e">
          <Row>
            <Col>
              <h4>Evacuation Plan:</h4>
              <ul>
                <li>
                  1. Stay Calm and Assess: As soon as you feel shaking, stay
                  calm and assess the situation. If you are indoors, stay there.
                  If outdoors, move to an open area away from buildings, trees,
                  streetlights, and utility wires.
                </li>
                <li>
                  2. Drop, Cover, and Hold On: Drop to your hands and knees to
                  prevent being knocked over. Take cover under a sturdy piece of
                  furniture or against an interior wall away from windows. Hold
                  on until the shaking stops.
                </li>
                <li>
                  3. Evacuation Route: Identify and plan multiple evacuation
                  routes from your home or workplace to safe areas such as
                  parks, open fields, or designated evacuation centers.
                </li>
                <li>
                  4. Communication: Have a communication plan with family
                  members and establish a meeting point outside of your home or
                  neighborhood in case of separation during an earthquake.
                </li>
                <li>
                  5. Emergency Kit: Prepare a disaster supply kit that includes
                  essentials such as water, non-perishable food, first aid
                  supplies, flashlight, batteries, sturdy shoes, and a
                  battery-powered or hand-crank radio.
                </li>
              </ul>
            </Col>
            <Col>
             <h4>Suggested Measures:</h4> 
              <ul>
                <li>
                  1. Secure Furniture and Objects: Secure heavy furniture,
                  bookshelves, and other objects that could fall or topple
                  during an earthquake. Use earthquake-resistant fasteners and
                  straps.
                </li>
                <li>
                  2. Check Building Structure: Ensure that your home or
                  workplace is up to current seismic building codes. Consider
                  retrofitting older buildings to improve their earthquake
                  resistance.
                </li>
                <li>
                  3. Gas and Electrical Safety: Know how to shut off gas, water,
                  and electricity in case of leaks or damage. Keep wrenches or
                  tools handy for this purpose.
                </li>
                <li>
                  4. Stay Informed: Stay informed about earthquake preparedness
                  and local emergency procedures. Sign up for emergency alerts
                  and warnings from local authorities.
                </li>
                <li>
                  5. Practice Drills: Conduct earthquake drills regularly with
                  your family or coworkers to practice drop, cover, and hold on,
                  evacuation routes, and meeting points.
                </li>
                <li>
                  6. Community Involvement:** Get involved in your community's
                  emergency preparedness efforts. Join neighborhood watch groups
                  or community emergency response teams (CERT).
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <span className="plan-content">
        By following these evacuation plans and suggested measures, individuals
        and communities can significantly reduce the risks and impacts of
        earthquakes, ensuring safety and resilience in earthquake-prone regions
        like California.</span>
      </div>
    </div>
  );
};

export default Component3;
