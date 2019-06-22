import React from "react";

import Wrapper from '../Wrapper';
import cardInfo from '../Card/cardInfo.json'
import CardName from '../Card/CardName'

class giftList extends React.Component {
  state = {
    cardInfo
  };
  render() {
    return (
      <Wrapper>
        <CardName />
      </Wrapper>
    )
  }
};

export default giftList;