import React from "react";
import "./FriendCard.css";

function FriendCard(props) {
  const styles = {
    marginBottom: "10px",
    marginRight: "10px",
    width: "350px",
    display: "inline-block"
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
              >
                Add gift
              </button>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/action1" />
              <form>
                <input
                  className="form-control"
                  value={props.itemName}
                  name="itemName"
                  onChange={e => props.handleInputChange(e)}
                  type="text"
                  placeholder="Gift Name"
                />
                <input
                  className="form-control"
                  value={props.comments}
                  name="comments"
                  onChange={e => props.handleInputChange(e)}
                  type="text"
                  placeholder="Comments"
                />
                <input
                  className="form-control"
                  value={props.price}
                  name="price"
                  onChange={e => props.handleInputChange(e)}
                  type="number"
                  placeholder="10.00"
                />
                <br />
                <button
                  id={props.id}
                  type="button"
                  className="btn btn-success"
                  onClick={e => props.saveGift(e)}
                >
                  Submit
                </button>
              </form>
            </div>
          </h6>
        </div>

        <div className="see-gifts-dropdown">
          <h6 className="drop-gift">
            <button
              className="btn btn-success"
              id="seeAllGiftsButton"
              onClick={() => props.seeGifts(props.id)}
            >
                  See all of {props.name}'s gifts! 
            </button>

            {/* <button
              className="btn btn-success"
              id="seeAllGiftsButton"
              onClick={e => props.seeGiftsBought(e)}
            >
                See all gifts bought
            </button> */}
            
            <button
            className="btn btn-danger"
            id="deleteButton"
            onClick={e => props.delete(e)}>
              Delete friend?
            </button>

          </h6>
        </div>
      </div>
    </div>
  );
}

export default FriendCard;
