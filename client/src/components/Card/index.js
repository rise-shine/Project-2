import React from "react";
import '../Card/Card.css'

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Gift:</strong> {props.gift}
          </li>
          <li>
            <strong>Price:</strong> ${props.price}
          </li>
          <li>
            <strong>Purchased:</strong> {props.completed}
          </li>
        </ul>
      </div>
      <span className="remove">x</span>
    </div>
  );
}

export default Card;
