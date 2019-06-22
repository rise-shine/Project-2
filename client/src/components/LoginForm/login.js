import React from "react";

//import Modal from "react-bootstrap/Modal";
//import Button from "react-bootstrap/Button";

import "./login.css";


export default class LoginForm extends React.Component {
  state = {
    email: "",
    password: ""
  };
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

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
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Create a new Account. Enter an email address and password.
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
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
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close Without Saving
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.handleFormSubmit}
                >
                  Save New Account
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row" id="picture">
          <img
            src={require("../../images/giftbox.jpg")}
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
                type="button"
                className="btn btn-primary"
                onClick={this.handleFormSubmit}
              >
                Submit
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Create New Account
              </button>
            </form>
          </div>
          <div className="col-sm" />
        </div>
      </div>
    );
  }
}
