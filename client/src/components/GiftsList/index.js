import React from "react";

function GiftsList(props) {

  return (

   
    <tbody>
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