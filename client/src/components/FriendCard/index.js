import React from "react";
import "./FriendCard.css";

function FriendCard(props) {

const styles = {
  marginBottom: '10px',
  width: '350px',
};

const stylesMargin = {
  marginBotton: '10px',
};

    return (
        <div className="card" style={styles}>

          <div className="name">
            <p>
              <strong>Name:</strong> {props.name}
            </p>
            <p className="drop-gift">
              <strong>Date of birth:</strong> {props.dateOfBirth}
            </p>
            <p className="drop-gift">
              <strong>Relationship:</strong> {props.relationship}
            </p>
            <div className="add-gift-button">
              
              <h6 className="drop-gift">
                <a
                  className="card-dropdown-toggle"
                  href="#"
                  id="cardDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <button
                    className="btn btn-success"
                    id="addGiftButtonFC"
                    onClick={() => props.addGift(props.id)}
                  >
                    Add gift
                  </button>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/action1" />
                  <form>
                    <label>
                      Gifts:
                      <input placeholder="Gifts" type="text" name="gift" />
                    </label>
                    <br></br>
                    <label>
                      $:
                      <input placeholder="Price" type="number" name="price" />
                    </label>
                    <div>
                    <input type="checkbox"/>
                      <p>Has this been bought?</p>
                    <br />
                    </div>
                    
                    <button type="button" className="btn btn-success" id="submitButtonFC">
                      Submit
                    </button>
                  </form>
                </div>
              </h6>
            </div>
            
            <div className="see-gifts-dropdown">
              <h6 className="drop-gift">
                <a
                  className="card-dropdown-toggle"
                  href="#"
                  id="cardDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <button
                    className="btn btn-success"
                    id="seeAllGiftsButton"
                    style={stylesMargin}
                    onClick={(e) => props.seeGifts(e)}
                  >
                    See all gifts added
                  </button>

                  <button
                    className="btn btn-success"
                    id="seeAllGiftsBought"
                    onClick={(e) => props.seeGiftsBought(e)}
                  >
                    See all gifts bought
                  </button>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/action1" />
                </div>
              </h6>
            </div>
          </div>
        </div>
    )
};

export default FriendCard;