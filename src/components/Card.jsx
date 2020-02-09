import React from "react";
import ProjText from "./ProjText";
import './card.css';

function Card(props){

    return(

       <div className="d-inline-block img-card" onClick={(e) => props.click(props.item)}>
           <div className="div_column">
           <img className="img-on-card" src={props.item.imgSrc} alt={props.item.imgSrc} />
           {props.item.selected && <ProjText title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/>}
           </div>
       </div>

    );
}

export default Card;