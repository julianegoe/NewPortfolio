import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../index.scss';
import { Row, Col, Container } from 'react-bootstrap'



function AboutView() {

    useEffect(() => {
        Aos.init({
            duration: 2000,
            easing: 'ease-in'
        })
    }, [])

    return (
        <Container fluid elementId="about" id="about" data-aos="fade" className="About" >
            <Row >
                <Col>
                    <h1 className="headline" data-aos="fade" data-aos-duration="200">About 👩🏼‍💻</h1>
                </Col>
            </Row>
        </Container>

    )
};

export default AboutView;