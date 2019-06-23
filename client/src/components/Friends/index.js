import React from "react";
import { timingSafeEqual } from "crypto";
// import Card from "../Card/";
// import Wrapper from "../Wrapper";
// import friendInfo from "../Friends/friends.json";

function Friends (props) {
  // state = {
  //   friendInfo
  // };
  // render() {
    return (

      <div className="card">
    {/* <div className="img-container">
      <img alt={props.name} src={props.image} />

    </div> */}

        { props.name && props.dateOfBirth && props.relationship ? 
        
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
      <button onClick={(e) => props.addGift(e)}>Add gift</button>
        </div>
     
       :
<div className="name">
      <p>It looks like you haven't added any friends yet. You can start by clicking the button below!</p>
      <button onClick={(e) => props.addGift(e)}>Add gift</button>
  </div>
  }

  </div>

   
    
      // <Wrapper>
      //   {this.state.friendInfo.map(card => (
      //     <Card
      //       // image={card.picture}
      //       name={card.name}
      //       dob={card.dateOfBirth}
      //       relationship={card.relationship}
      //     />
      //   ))}
      // </Wrapper>
    );
  // }
}

export default Friends;
