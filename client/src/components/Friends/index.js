import React from "react";
import Card from "../Card/";
import Wrapper from "../Wrapper";
import friendInfo from "../Friends/friends.json";

class friendsList extends React.Component {
  state = {
    friendInfo
  };
  render() {
    return (
      <Wrapper>
        {this.state.friendInfo.map(card => (
          <Card
            image={card.picture}
            name={card.name}
            dob={card.dateOfBirth}
            relationship={card.relationship}
          />
        ))}
      </Wrapper>
    );
  }
}

export default friendsList
