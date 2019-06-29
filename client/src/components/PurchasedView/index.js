import React from "react";
import PurchasedList from "../PurchasedList";
import "./purchasedview.css";

function PurchasedView(props) {

  return (

<table className="table">
      <thead>
        <tr className="headings">
          <th scope="col-2" id="idea">
            Gift Purchased
          </th>
          <th scope="col-2" id="comments">
            Comments
          </th>
          <th scope="col-2" id="price">
            Price
          </th>
        </tr>
      </thead>

      {props.giftsBought.map(gift => (
                    
        <PurchasedList
          key={gift.id}
          id={gift.id}
          itemName={gift.itemName}
          comments={gift.comments}
          price={gift.price}
        />
      ))}


<br/>
<a href="/friends">  
<button 
className="btn btn-success"
id="returnButton"
>Return to friend list
</button>
</a> 


    </table>

  
  ) 

}
export default PurchasedView;
