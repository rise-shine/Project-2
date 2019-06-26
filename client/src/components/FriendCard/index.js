import React from "react";
import "./FriendCard.css";

function FriendCard(props) {
  const styles = {
    marginBottom: "10px",
    width: "350px"
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
                onClick={() => props.saveGift(props.id)}
              >
                Add gift
              </button>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/action1" />
              <form>
                <input
                  className="form-control"
                  value={props.giftName}
                  name="giftName"
                  onChange={e => props.handleInputChange(e)}
                  type="text"
                  placeholder="Gift Name"
                />

                <input
                  className="form-control"
                  value={props.holiday}
                  name="holiday"
                  onChange={e => props.handleInputChange(e)}
                  type="text"
                  placeholder="Date Needed 1990-01-01"
                />

                <input
                  className="form-control"
                  value={props.giftDesc}
                  name="giftDesc"
                  onChange={e => props.handleInputChange(e)}
                  type="text"
                  placeholder="comments about the gift"
                />
                <br />
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={e => props.saveGift(e)}
                >
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
                id="seeAllGiftsButton"
                onClick={() => props.seeGifts(props.id)}
              >
                See all gifts added
              </button>

              <button
                className="btn btn-success"
                id="seeAllGiftsButton"
                onClick={e => props.seeGiftsBought(e)}
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
  );
}

export default FriendCard;
