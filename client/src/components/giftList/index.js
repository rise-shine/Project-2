import React from "react";

import Wrapper from "../Wrapper";
import cardInfo from "../Card/cardInfo.json";
import CardName from "../Card/CardName";

class giftList extends React.Component {
  state = {
    cardInfo
  };
  render() {
    return (
      <div>
        <Wrapper>
          <CardName />
        </Wrapper>
      </div>
    );
  }
}

export default giftList;
