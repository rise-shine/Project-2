import React from "react";
import "../Navbar/Navbar.css";

function Navbar() {
  return (
        <nav className="navbar navbar-expand-lg navbar-danger bg-danger">
  <a className="navbar-brand" href="/">Gift Scribe</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon">__</span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"></a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         My Lists
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/gifts">Gift List</a>
          <a className="dropdown-item" href="/friendList">Friend List</a>
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
