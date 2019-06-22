import React from "react";
import Card from "../Card";
import Wrapper from "../Wrapper";
import friendInfo from "../Friends/friends.json";

export default class friendsList extends React.Component {
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
            dob={card.dateOfBirt}
            relationship={card.relationship}
          />
        ))}
      </Wrapper>
    );
  }
}
