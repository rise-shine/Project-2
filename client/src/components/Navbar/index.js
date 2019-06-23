import React from "react";
import "../Navbar/Navbar.css";

function Navbar(props) {
  return (
        <nav className="navbar navbar-expand-lg" id="navbarId">
  <a className="navbar-brand" id="logo" href="/">Gift Scribe <img id="pencil" src= "https://findicons.com/files/icons/897/nova/128/pencil.png"/></a>
  <button className="navbar-toggler" id="menuButton" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon">Menu</span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      {props.isLoggedIn ? 

      <li className="nav-link conditional">Welcome, {props.userName}!</li> :

      <li className="nav-item active">
        <a className="nav-link" id="login" href="/">Login <span className="sr-only">(current)</span></a>
      </li> }
      <li className="nav-item">
        <a className="nav-link" href="#"></a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         My Lists
        </a>
        <div className="dropdown-menu" id="dropdownId" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/gifts">Gift List</a>
          <a className="dropdown-item" href="/friends">Friend List</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/about">About Us</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
  )
}
export default Navbar;
