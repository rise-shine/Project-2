import React from "react";
import "./login.css";


export default class LoginForm extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    const { forminput, value } = event.target;
    this.setState({
      [forminput]: value
    });
  };

  handleFormSubmit = event => {
    //need to add logic to check this data with database

    event.preventDefault();

    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row" id="picture">
          <img
            src= ""
            className="img-fluid"
            alt="gift boxes"
          />
        </div>
        <div className="row" id="spacer" />
        <div className="row" id="form">
          <div className="col-sm" />
          <div className="col-sm-6">
            <form className="form-group">
              <input
                className="form-control"
                value={this.state.firstName}
                forminput="email"
                onChange={this.handleInputChange}
                type="email"
                placeholder="Email Address"
              />
              <input
                className="form-control"
                value={this.state.lastName}
                forminput="password"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Password"
              />

              <button
                className="btn btn-primary"
                onClick={this.handleFormSubmit}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col-sm" />
        </div>
        <div className="row" id="spacer2" />
      </div>
    );
  }
}
