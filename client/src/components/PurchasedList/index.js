import React from "react";
import "./purchasedlist.css";

function PurchasedList(props) {

  return (

   
    <tbody className="tbody">
      <tr>
        <td>{props.itemName}</td>
        <td>{props.comments}</td>
        <td>{props.price}</td>
      </tr>
    </tbody>
  
  
  )
};

export default PurchasedList;