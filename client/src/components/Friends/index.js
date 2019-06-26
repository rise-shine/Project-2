import React from "react";
import FriendCard from "../FriendCard";
import "./friends.css";

function Friends(props) {
  console.log(props.friendsList);

  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-success"
        id="addNewFriendButton"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Add new friend
      </button>
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
                  value={props.name}
                  name="name"
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

      <div className="name">
        {props.friendsList.length > 0 ? (
          props.friendsList.map(friend => (
            <FriendCard
              key={friend.id}
              id={friend.id}
              name={friend.name}
              dateOfBirth={friend.dateOfBirth}
              relationship={friend.relationship}
              seeGifts={props.seeGifts}
              handleInputChange={props.handleInputChange}
              seeGiftsBought={props.seeGiftsBought}
              saveGift={props.saveGift}
              addGift={props.addGift}
              itemName={props.itemName}
              comments={props.comments}
              price={props.price}
            />
          ))
        ) : (
          <div id="noFriends">
            <span id="boilerplate">
              It looks like you haven't added any friends yet. You can start by
              clicking the button above!
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Friends;
