import React from "react";
import "../Navbar/Navbar.css";

function Navbar(props) {
  return (
        <nav className="navbar navbar-expand-lg" id="navbarId">
  <a className="navbar-brand" id="logo" href="/">Gift Scribe <img id="pencil" alt="Pencil" src= "https://findicons.com/files/icons/897/nova/128/pencil.png"/></a>
  <button className="navbar-toggler" id="menuButton" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  Menu
  </button>

{props.isLoggedIn ? 
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active" id="welcome">Welcome, {props.userName}!</li>
        
        <li className="nav-item active">
          <a className="nav-link" id="logout" href="/" onClick={(e) => {
            props.history.push("/")
            props.logOut(e)
            }}>Logout</a>
        </li>
      </ul> 
      
      </div> :

<div className="collapse navbar-collapse" id="navbarSupportedContent">
   
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" id="login" href="/">Login <span className="sr-only">(current)</span></a>
        </li>
      </ul> 
      
</div>}
</nav>
  )
}
export default Navbar;
