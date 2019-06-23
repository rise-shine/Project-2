import React from "react";
import CardItem from "./CardItem";
import cardInfo from "./cardInfo.json";
import AddGift from "./AddGift";

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
            <h5>{person.friend}</h5>
          </div>
          
          <h5 className="drop-gift">
            <a
              className="card-dropdown-toggle"
              href="#"
              id="cardDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <button type="button" className="btn btn-primary">
                Gifts
              </button>
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
          </h5>
          <div className="add-gift">
            <a
              className="card-dropdown-toggle"
              href="#"
              id="cardDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <button type="button" className="btn btn-success">
                Add Gift
              </button>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/action1" />
              
              <form>
                
                <label>
                  gift:
                  <input placeholder= "Gift" type="text" name="gift" />
                </label>
                <label>
                  price:
                  <input placeholder="Price" type="text" name="price" />
                </label>
                <hr />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      );
    });
  }
}
export default CardName;
