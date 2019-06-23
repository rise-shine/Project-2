import React from "react";

const CardItem = props => (
  <div className="list">
    
    <li>gift: {props.gift}</li>
    <li>price: {props.price}</li>
    <li>purchased: {props.completed}</li>
  </div>
);

export default CardItem;
