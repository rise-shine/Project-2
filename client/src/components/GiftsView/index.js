import React from "react";
import GiftsList from "../GiftsList";
import "./giftsview.css";

function GiftsView(props) {

  return (

    <table className="table">
      <thead>
        <tr className="headings">
          <th scope="col-2" id="idea">Gift Idea</th>
          <th scope="col-2" id="comments">Comments</th>
          <th scope="col-2" id="price">Price</th>
          <th scope="col-2" id="bought">Have you bought it?</th>
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