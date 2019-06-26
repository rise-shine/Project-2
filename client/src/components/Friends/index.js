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
                  <button className="btn btn-success">Add gift</button>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/action1" />
                  <form>
                    <input
                      className="form-control"
                      value={props.giftName}
                      name="giftName"
                      onChange={e => props.handleGiftAdd(e)}
                      type="text"
                      placeholder="Gift Name"
                    />

                    <input
                      className="form-control"
                      value={props.holiday}
                      name="holiday"
                      onChange={e => props.handleGiftAdd(e)}
                      type="text"
                      placeholder="Date Needed 1990-01-01"
                    />

                    <input
                      className="form-control"
                      value={props.giftDesc}
                      name="giftDesc"
                      onChange={e => props.handleGiftAdd(e)}
                      type="text"
                      placeholder="comments about the gift"
                    />
                    <br />
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={e => props.addGift(e)}
                    >
                      submit
                    </button>
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

        {props.friendsList.length > 0 
        ?
        
        props.friendsList.map(friend => (
          <FriendCard 
          key={friend.id}
          id={friend.id}
          name={friend.name}
          dateOfBirth={friend.dateOfBirth}
          relationship={friend.relationship}
          addGift={props.addGift}
          seeGifts={props.seeGifts}
          seeGiftsBought={props.seeGiftsBought}
          />
        ))
        :

        <p><span id="boilerplate">


        <div id="noFriends"><span id="boilerplate">

              It looks like you haven't added any friends yet. You can start by
              clicking the button above!
              </span>
            </div>
        }
            
          </div>
  

       
      </div>
  );
}

export default Friends;
