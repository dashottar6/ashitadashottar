import React from "react";
import {Col, Container, Jumbotron, Row} from "react-bootstrap";

function RouteMeta(props) {
    return(
        <Jumbotron>
            <Container>
                <Row>
                    <Col>
                        {props.title && <h1>{props.title}</h1>}
                        {props.subtitle && <h2>{props.subTitle}</h2>}
                        {props.text && <h3>{props.text}</h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default RouteMeta;