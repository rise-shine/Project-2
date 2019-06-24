import React from "react";

function FriendCard(props) {

    return (
        <div className="card">

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
                    onClick={e => props.addGift(e)}
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
                    <br />
                    <button type="button" className="btn btn-success">
                      submit
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
                    onClick={e => props.seeGifts(e)}
                  >
                    See all Gifts added
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