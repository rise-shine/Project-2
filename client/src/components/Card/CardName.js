import React from "react";
import CardItem from "./CardItem";
import cardInfo from "./cardInfo.json";

class CardName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardInfo
    };
  }
  render() {
    return this.state.cardInfo.map(person => {
      return (
        <div className="card">
          <div className="name">
            <li>{person.friend}</li>
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
                <CardItem

                  gift={person.gift}
                  price={person.price}
                  purchased={person.completed}
                />
              </a>
            </div>
          </li>
        </div>
      );
    });
  }
}
export default CardName;