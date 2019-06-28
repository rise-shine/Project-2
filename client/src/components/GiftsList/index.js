import React from "react";
import "./giftslist.css";

function GiftsList(props) {

  return (

   
    <tbody className="tbody">
      <tr>
        <td>{props.itemName}</td>
        <td>{props.comments}</td>
        <td>{props.price}</td>
        <td>{props.completed}</td>
      </tr>
    </tbody>
  
  
  )
};

export default GiftsList;