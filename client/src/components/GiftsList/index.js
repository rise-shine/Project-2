import React from "react";
import "./giftslist.css";

function GiftsList(props) {

  return (

   
    <tbody className="tbody">
      <tr>
        <td>{props.itemName}</td>
        <td>{props.comments}</td>
        <td>{props.price}</td>
        <td><button id={props.id} className="markCompleted" onClick={e => props.updateGift(e)}>&#10004;</button></td>
        {/* <td>{props.completed}</td> */}
      </tr>
    </tbody>
  
  
  )
};

export default GiftsList;