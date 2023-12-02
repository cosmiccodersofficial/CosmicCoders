import React, {useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamMember from './TeamMember';
import './OurTeam.css';
import harshit from '../../images/Harshit.jpg';
import archit from '../../images/Archit.jpg';
import manas from '../../images/manas.jpg';
import ayushi from '../../images/Ayushi Abrol.jpg';
import abhay from '../../images/Abhay.jpg';
import ayush from '../../images/Ayush.jpg';
import priyanka from '../../images/Priyanka.jpg';

const OurTeam = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Container className="bg-gray-50 p-3 mt-5">
            <h2 className="display-3 fw-bold mb-6 mt-5 text-blue-900 text-center animate-fade">Our Team</h2>
            
            {/* First Row */}
            <Row className="mb-4 mx-md-4">
                <Col className="col-md-4 mb-md-0 mb-4">
                    <TeamMember name="Harshit Sharma" role="Co-Founder & Executive Head" linkedin="https://www.linkedin.com/in/harshit1822/" imageSrc={harshit} />
                </Col>
                <Col className="col-md-4 mb-md-0 mb-4 d-flex justify-content-center">
                    <TeamMember name="Archit Mishra" role="Co-Founder & Promotional Head" linkedin="https://www.linkedin.com/in/archit-mishr/" imageSrc={archit} />
                </Col>
                <Col className="col-md-4 mb-md-0 mb-4 d-flex justify-content-end">
                    <TeamMember name="Manas Bajpai" role="Co-Founder & Tech Head" linkedin="https://www.linkedin.com/in/manasbajpai/" imageSrc={manas} />
                </Col>
            </Row>

            {/* Second Row */}
            <Row className="mb-4 mx-md-4">
                <Col className="col-md-4 mb-md-0 mb-4">
                    <TeamMember name="Ayushi Abrol" role="Operational Head" linkedin="https://www.linkedin.com/in/ayushi-abrol/" imageSrc={ayushi}/>
                </Col>
                <Col className="col-md-4 mb-md-0 mb-4">
                    <TeamMember name="Abhay Sharma" role="Community Engagement Manager" linkedin="https://www.linkedin.com/in/abhaysharma31/" imageSrc={abhay}/>
                </Col>
                <Col className="col-md-4 mb-md-0 mb-4">
                    <TeamMember name="Ayush Dev" role="Operations & Event Coordinator" linkedin="https://www.linkedin.com/in/ayush-dev-1a5370211/" imageSrc={ayush}/>
                </Col>
            </Row>

            {/* Third Row */}
            <Row className="mb-4 mx-md-4 justify-content-center">
                {/* <Col className="col-md-4 mb-md-0 mb-4"> </Col> */}
                <Col className="col-md-4 mb-md-0 mb-4">
                    <TeamMember name="Priyanka Loura" role="YouTube Partner" linkedin="https://www.linkedin.com/in/priyankaloura/" imageSrc={priyanka}/>
                </Col>
                {/* <Col className="col-md-4 mb-md-0 mb-4"> </Col> */}
            </Row>
        </Container>
    )
}
export default OurTeam;
