import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import HomeView from './components/home-view/home-view';
import AboutView from './components/about-view/about-view';
import WorkView from './components/work-view/work-view';
import ContactView from './components/contact-view/contact-view'
import { Navbar, Nav } from 'react-bootstrap'

import './index.scss'


function App() {
    const [expanded, setExpanded] = useState(false)


    return (

        <Router>
            <Navbar className="navbar-sticky" expanded={expanded} expand="md">
                <Navbar.Toggle className="m-3" aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-center">
                        <Nav.Item className="m-3">
                            <HashLink onClick={() => setExpanded(false)} className="nav-link" smooth to="/#home">Home</HashLink>
                        </Nav.Item>
                        <Nav.Item className=" m-3">
                            <HashLink onClick={() => setExpanded(false)} className="nav-link" smooth to="/#about">About</HashLink>
                        </Nav.Item>
                        <Nav.Item className=" m-3">
                            <HashLink onClick={() => setExpanded(false)} className="nav-link" smooth to="/#work">Work</HashLink>
                        </Nav.Item>
                        <Nav.Item className="m-3">
                            <HashLink onClick={() => setExpanded(false)} className="nav-link" smooth to="/#contact">Contact</HashLink>
                        </Nav.Item>
                    </Nav>
                </ Navbar.Collapse>

            </Navbar>
            <HomeView />
            <AboutView />
            <WorkView />
            <ContactView />
            <Switch>
                <Route exact path="/#home" component={HomeView} />
                <Route exact path="/#about" component={AboutView} />
                <Route exact path="/#work" component={WorkView} />
                <Route exact path="/#contact" component={ContactView} />
            </Switch>
        </Router >


    )
}

const container = document.getElementsByClassName('root')[0];
ReactDOM.render(React.createElement(App), container);
