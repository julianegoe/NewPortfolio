import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../index.scss';
import { Row, Col, Container } from 'react-bootstrap'



function ContactView() {

    useEffect(() => {
        Aos.init({
            duration: 2000,
            easing: 'ease-in'
        })
    }, [])

    return (
        <Container fluid id="contact" className="Contact">
            <Row >
                <Col>
                    <h1 className="headline" data-aos="fade" data-aos-duration="500">Contact me</h1>
                </Col>
            </Row>
        </Container>

    )
};

export default ContactView;