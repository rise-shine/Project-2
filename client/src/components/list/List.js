import React from "react";

function List(props) {
  return (
    <div className="list">
      <input type="text" list={props.name.gift} />
      <p>{props.name.gift}</p>
    </div>
  );
}

export default List;
