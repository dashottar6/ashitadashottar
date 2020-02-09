import React from "react";
import AskHusky from '../assets/AskHusky.png';
import Outreach from '../assets/Outreach.png';
import train from '../assets/train.jpg';
import Card from './Card';
import {Container, Row} from "react-bootstrap";

class Carousal extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            items: [
                {
                    id: 0,
                    title: 'AskHusky',
                    subTitle: 'A MEAN-Stack Project, a peer-to-peer problem-solving platform where one can ask queries regarding academic subjects or otherwise. Built for Northeastern students.',
                    imgSrc: AskHusky,
                    link: 'https://github.com/dashottar6/AskHusky',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Outreach Portal',
                    subTitle: 'A PHP based application developed for the conduction of workshops between colleges in India. It is also used for database management and analytics of the same.',
                    imgSrc: Outreach,
                    link: 'http://vlabs.iitb.ac.in/outreachportal/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Quarter Allocation System',
                    subTitle: 'A PHP Project which helped Indian Railways, Mumbai(IN) to digitally allot houses to government officials. This came as a big relief from the manual process.',
                    imgSrc: train,
                    link: '/about',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
       let items = [...this.state.items];
       items[id].selected = items[id].selected ? false : true;
       items.forEach(item => {
           if(item.id != id){
               item.selected = false;
           }
       });

       this.setState({
           items
       });

    };

    createItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    };

    render() {
        return(
        <Container fluid={true}>
            <Row className="justify-content-around back_color">
                {this.createItems(this.state.items)}
            </Row>
        </Container>
        );
    }
}

export default Carousal;