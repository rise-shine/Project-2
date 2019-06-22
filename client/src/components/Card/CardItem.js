import React from "react";

function CardItem(props) {
  return (
    <div className="card-item">
      <ul>
        <li>
          <strong>Gift:</strong> {props.gift}
        </li>
        <li>
          <strong>Price;</strong> {props.price}
        </li>
        <li>
          <strong>Purchased:</strong> {props.purchased}
        </li>
      </ul>
      <span className="remove">x</span>
    </div>
  );
}

export default CardItem;
