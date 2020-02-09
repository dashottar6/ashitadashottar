import React from "react";
import Container from "react-bootstrap/Container";
import {useSpring, animated} from "react-spring";
import './card.css';

function ProjText(props){
    const style= useSpring({opacity:1, from: {opacity: 0}});
    return(
        <animated.div className="img-card-info" style={style}>
            <p className="img-card-title">{props.title}</p>
            <p className="img-card-subTitle text-justify">{props.subTitle}</p>
            <a className="font-weight-bolder" href={props.link} target="_blank" rel="noopener noreferrer">View</a>
        </animated.div>
    );
}

export default ProjText;