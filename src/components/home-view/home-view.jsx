import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../index.scss';
import './home-view.scss';
import { Row, Col, Container } from 'react-bootstrap'



function HomeView() {

    useEffect(() => {
        Aos.init({
            duration: 2000,
            easing: 'ease-in'
        })
    }, [])




    return (
        <Container fluid id="home" data-aos="fade" className="Home">
            <Row className="justfy-content-xs-center justify-content-sm-center justfy-content-md-center justfy-content-lg-center justfy-content-xl-center " >
                <Col xs={12} sm={8} md={8} lg={8} xl={8} className="mt-5">
                    <h1 className="headline" data-aos="fade" data-aos-duration="500">Hi there 👋🏻</h1>
                    <div className="home-paragraph mt-5" data-aos="fade-up" data-aos-duration="700" data-aos-delay="500" data-aos-once="true">My name is Juliane. I'm an aspiring web developer from Berlin.</div>
                </Col>
            </Row>
        </Container>
    )
};

export default HomeView;