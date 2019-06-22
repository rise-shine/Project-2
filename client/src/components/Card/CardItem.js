import React from "react";

const CardItem = props => (
  <div className="list">
    
    <li>Gift idea: {props.gift}</li>
    <li>Price: ${props.price}</li>
    <li>Purchased?: {props.completed}</li>
  </div>
);

export default CardItem;