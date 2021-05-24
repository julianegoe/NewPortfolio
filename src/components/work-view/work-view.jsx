import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../index.scss';
import { Row, Col, Container, Image } from 'react-bootstrap';
import pokemon from 'url:../../Assets/pokemon_mockup.png';
import myFlix from 'url:../../Assets/myflixmockup.png';
import movieApi from 'url:../../Assets/movie_api.png'
import './work-view.scss'



function WorkView() {

    useEffect(() => {
        Aos.init({
            duration: 2000,
            easing: 'ease-in'
        })
    }, [])

    return (
        <Container fluid id="work" className="Work">
            <Row className="justfy-content-xs-center justify-content-sm-center justfy-content-md-center justfy-content-lg-center justfy-content-xl-center " >
                <Col xs={12}>
                    <h1 className="headline" data-aos="fade" data-aos-duration="500">Portfolio 💻</h1>
                </Col>

                <Col xs={12} md={6}>
                    <Image data-aos="slide-right" data-aos-duration="700" className="pokemon-image mt-5" src={pokemon} />
                </Col >
                <Col className="p-3" xs={12} md={6}>
                    <p data-aos="slide-left" data-aos-duration="700" className="mt-5 p-5">This is a responsive web app build with HTML, CSS and Vanilla JS fetching data from the external
					PokeAPI.</p>
                    <div style={{ textAlign: "center" }}>
                        <a className="mr-5" href="https://github.com/julianegoe/CF_pokedex_application"><i class="bi bi-github"></i></a>
                        <a style={{ fontSize: "1.75em" }} href="https://julianegoe.github.io/CF_pokedex_application/">Live Demo</a>
                    </div>
                </Col>
            </Row>

            <Row className="justfy-content-xs-center justify-content-sm-center justfy-content-md-center justfy-content-lg-center justfy-content-xl-center mt-5 " >
                <Col className="p-3" xs={12} md={6}>
                    <p data-aos="slide-right" data-aos-duration="700" className="mt-5 p-5">This is the client side application for the myFlix API. It showcases several movies. Users can favorite movies and get information about each movie.
					</p>
                    <div style={{ textAlign: "center" }}>
                        <a className="mr-5" href="https://github.com/julianegoe/CF_myflix_client"><i class="bi bi-github"></i></a>
                        <a style={{ fontSize: "1.75em" }} href="https://app-myflix.netlify.app/">Live Demo</a>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <Image data-aos="slide-left" data-aos-duration="700" className="pokemon-image mt-5" src={myFlix} />
                </Col >
            </Row>

            <Row className="justfy-content-xs-center justify-content-sm-center justfy-content-md-center justfy-content-lg-center justfy-content-xl-center " >
                <Col xs={12} md={6}>
                    <Image data-aos="slide-right" data-aos-duration="700" className="pokemon-image mt-5" src={movieApi} />
                </Col >
                <Col className="p-3" xs={12} md={6}>
                    <p data-aos="slide-left" data-aos-duration="700" className="mt-5 p-5">This is the MyFlix REST API for a for a web application that provides access to information about different movies, directors, and genres. It also comes with endpoint for registering users.</p>
                    <div style={{ textAlign: "center" }}>
                        <a className="mr-5" href="https://github.com/julianegoe/CF_pokedex_application"><i class="bi bi-github"></i></a>
                    </div>
                </Col>
            </Row>
        </Container >

    )
};

export default WorkView;