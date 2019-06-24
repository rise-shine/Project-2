import React from "react";
// import { timingSafeEqual } from "crypto";
// import Card from "../Card/";
// import Wrapper from "../Wrapper";
// import friendInfo from "../Friends/friends.json";

function Friends(props) {
  // state = {
  //   friendInfo
  // };
  // render() {
  return (
    <div className="container">
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add a new friend!
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="form-group">
                <input
                  className="form-control"
                  value={props.friendName}
                  name="friendName"
                  onChange={e => props.handleInputChange(e)}
                  type="text"
                  placeholder="Friend's Name"
                />
                <input
                  className="form-control"
                  value={props.friendDOB}
                  name="friendDOB"
                  onChange={e => props.handleInputChange(e)}
                  type="text"
                  placeholder="1990-01-01"
                />
                <input
                  className="form-control"
                  value={props.friendRelationship}
                  name="friendRelationship"
                  onChange={e => props.handleInputChange(e)}
                  type="text"
                  placeholder="Relationship"
                />
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close Without Saving
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={e => props.addFriend(e)}
                data-dismiss="modal"
              >
                Save New Friend
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        {/* <div className="img-container">
      <img alt={props.name} src={props.image} />

    </div> */}

        {props.name && props.dateOfBirth && props.relationship ? (
          <div className="name">
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li className="drop-gift">
              <strong>Date of birth:</strong> {props.dateOfBirth}
            </li>
            <li className="drop-gift">
              <strong>Relationship:</strong> {props.relationship}
            </li>
            <div className="add-gift-button">
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
                  <button className= "btn btn-success" onClick={e => props.addGift(e)}>Add gift</button>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/action1" />
                  <form>
                    <label>
                      Gifts:
                      <input placeholder="Gifts" type="text" name="gift" />
                    </label>
                    <label>
                      $:
                      <input placeholder="Price" type="number" name="price" />
                    </label>
                    <br></br>
                    <button type="button" className="btn btn-success" >submit</button>
                  </form>
                </div>
              </li>
            </div>

            <button onClick={e => props.seeGifts(e)}>
              See all Gifts added
            </button>
          </div>
        ) : (
          <div className="name">
            <p>
              It looks like you haven't added any friends yet. You can start by
              clicking the button below!
            </p>
          </div>
        )}

        <button
          type="button"
          className="btn btn-success"
          id="addNewFriendButton"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Add new friend
        </button>
      </div>
    </div>
  );
}

export default Friends;
