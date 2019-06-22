import React from "react";

const CardName = props => (
  <div className="card">
    <div className="name">
      <li>
        <strong>Name:</strong> {props.name}
      </li>
    </div>
    <li className="drop-gift">
      <a
        className="card-dropdown-toggle"
        href="#"
        id="cardDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Gifts
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="/action1">
          <CardItem />
        </a>
      </div>
    </li>
  </div>
);
export default CardName;
// class Card extends React.Component {
//     state = {
//       cardInfo
//     };
//     render() {
//       return (
//         <div className="card">
//           <div className="name">
//             <li className="drop-gift">
//               <a
//                 className="card-dropdown-toggle"
//                 href="#"
//                 id="cardDropdown"
//                 role="button"
//                 data-toggle="dropdown"
//                 aria-haspopup="true"
//                 aria-expanded="false"
//               >
//                 Gifts
//               </a>
//               <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <a className="dropdown-item" href="/action1">
//                   {this.state.cardInfo.map(card => (
//                     <CardItem
//                       id={card.id}
//                       name={card.friend}
//                       gift={card.gift}
//                       price={card.price}
//                       purchased={card.completed}
//                     />
//                   ))}
//                 </a>
//               </div>
//             </li>
//           </div>
//         </div>
//       );
//     }
//   }
