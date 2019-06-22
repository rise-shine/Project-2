import React from "react";
import CardItem from "./CardItem";


const Card = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />

    </div>
    <div className="name">
      <li>
        <strong>Name:</strong> {props.name}
      </li>
    </div>
    <li className="drop-gift">
      <a
        className="card-dropdown-toggle"
        href="#"
        id="cardDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Gifts
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="/action1">
          <CardItem />
        </a>
      </div>
    </li>
  </div>
);

export default Card;
