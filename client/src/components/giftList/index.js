import React from "react";
import Card from "../Card"
import Wrapper from "../Wrapper";
import cardInfo from "../Card/cardInfo.json"

class giftList extends React.Component {
  state = {
    cardInfo
  };
 render(){
   return(
     <Wrapper>
    {this.state.cardInfo.map(card => (
      <Card
      image = "https://cdn.pixabay.com/photo/2013/07/12/15/40/present-150291__340.png"
        id={card.id}
        name={card.friend}
        gift={card.gift}
        price={card.price}
        purchased={card.completed} 
      />
    ))}
     </Wrapper>
   )
 } 
};

export default giftList;