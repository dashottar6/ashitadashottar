import React, { Component } from 'react';
import {Container, Col, Image, Row} from 'react-bootstrap';
import AskHusky from '../assets/AskHusky.png';
import './About.scss';
import mainWalk from '../assets/mainWalk.jpg';



class About extends Component {
    render() {
        return (
            <div className="app1Color">
                <Container fluid={true}>
                    <Row>
                        <div className="col-xs-6 col-md-4 p-0">
                            <Image src={mainWalk} className="header-image" />

                        </div>
                        <div className="col-xs-12 col-md-8">
                            <h1 className="display-4 font-weight-light text-center">About Me</h1>
                            <hr className="fade-2" />
                            <div className="skills text-justify">
                                <p>I am a software engineering enthusiast, currently pursuing Master's degree at Northeastern University, USA.
                                    I love making small software applications like websites, web APIs, and have keen interest in solving the
                                    problems faced by people from all walks of life.</p>
                            </div>
                            <div className="skills">
                                <hr className="hr-text" data-content="Education"/>
                                <i className="fas fa-circle"></i>
                                Master of Science in Information Systems
                                <br/>
                                <b>Northeastern University, Boston, USA</b>
                                <br/>
                                <p className="font-italic">Awarded Dean’s Scholarship</p>
                                <br/>
                                <i className="fas fa-circle"></i>
                                Bachelor of Technology in Electronics and Telecommunication
                                <br/>
                                <b>Bharati Vidyapeeth University, India</b>
                                <br/>
                                July 2014 -- June 2018
                            </div>
                            <div className="skills">
                                <hr className="hr-text" data-content="Technologies"/>
                                <ul id="techlist">
                                    <li>JavaScript</li>
                                    <i className="fas fa-circle"></i>
                                    <li>TypeScript</li>
                                    <i className="fas fa-circle"></i>
                                    <li>RxJS</li>
                                    <i className="fas fa-circle"></i>
                                    <li>React</li>
                                    <i className="fas fa-circle"></i>
                                    <li>NodeJS</li>
                                    <i className="fas fa-circle"></i>
                                    <li>AngularJS</li>
                                    <i className="fas fa-circle"></i>
                                    <li>MEAN stack</li>
                                    <i className="fas fa-circle"></i>
                                    <li>Bootstrap</li>
                                    <i className="fas fa-circle"></i>
                                    <li>SQL</li>
                                    <i className="fas fa-circle"></i>
                                    <li>Sass</li>
                                    <i className="fas fa-circle"></i>
                                    <li>Git</li>
                                    <i className="fas fa-circle"></i>
                                    <li>HTML</li>
                                    <i className="fas fa-circle"></i>
                                    <li>CSS</li>
                                    <i className="fas fa-circle"></i>
                                    <li>CircleCI</li>
                                    <i className="fas fa-circle"></i>
                                    <li>AWS</li>
                                </ul>
                            </div>

                        </div>

                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;



