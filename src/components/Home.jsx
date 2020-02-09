import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';
import balcony from '../assets/balcony.jpg';


export default class Home extends Component{
    render(){
        return(
            <div className="main_div">
            <Container fluid={true}>

                <Row className="show-grid text-center appColor">
                    <Col xs={12} sm={4} className="person-wrapper">

                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper appColor">
                        <h1 className="display-4 font-weight-bold appColor">Welcome to Ashita's Portfolio</h1>
                        <p>I love to build stuff!</p>
                        <br></br>
                            <Link to="/about">
                        <img src={balcony} circle className="profile-pic avatar" />
                            </Link>
                        <h2 className="display-4 font-weight-light appColor">Ashita Dashottar</h2>
                    </Col>
                </Row>
            </Container>
            </div>

        );
    }
}