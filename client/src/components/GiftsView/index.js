import React from "react";
import GiftsList from "../GiftsList";

function GiftsView(props) {

  return (

    <table className="table">
      <thead>
        <tr>
          <th scope="col">Gift Idea</th>
          <th scope="col">Comments</th>
          <th scope="col">Price</th>
          <th scope="col">Have you bought it?</th>
        </tr>
      </thead>
         
      {props.gifts.map(gift => (
                    
        <GiftsList
          key={gift.id}
          itemName={gift.itemName}
          comments={gift.comments}
          price={gift.price}
          completed={gift.completed}
        />
      ))}
    

      

    </table>
  )
    
}
export default GiftsView;