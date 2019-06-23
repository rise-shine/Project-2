import React from "react";
import "./login.css";

function LoginForm(props) {

    console.log(props);
    return (
      <div className="container" id="containerId">

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Create a new Account. Enter you full name, an email address
                  and password.
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
                    value={props.registerName}
                    name="name"
                    onChange={(e) => props.handleRegistration(e)}
                    type="text"
                    placeholder="Full Name"
                  />
                  <input
                    className="form-control"
                    value={props.registerEmail}
                    name="email"
                    onChange={(e) => props.handleRegistration(e)}
                    type="email"
                    placeholder="Email Address"
                  />
                  <input
                    className="form-control"
                    value={props.registerPassword}
                    name="password"
                    onChange={(e) => props.handleRegistration(e)}
                    type="password"
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
                  onClick={(e) => props.handleSignUp(e)}
                  data-dismiss="modal"
                >
                  Save New Account
                </button>

              </div>
            </div>
          </div>
        </div>

        <div className="row" id="picture">
          <img
            src={require("../../images/legalpad.png")}
            className="img-fluid"
            alt="legal pad"
          />
        </div>
        <div className="row" id="spacer" />
        <div className="row" id="form">
          <div className="col-sm" />
          <div className="col-sm-6">
            <form className="form-group">
              <input
                className="form-control"
                value={props.email}
                name="email"
                onChange={(e) => props.handleInputChange(e)}
                type="email"
                placeholder="Email Address"
              />
              <input
                className="form-control"
                value={props.password}
                name="password"
                onChange={(e) => props.handleInputChange(e)}
                type="password"
                placeholder="Password"
              />

              <button
                type="button"
                className="btn btn-primary"
                id="submitButton"
                onClick={(e) => props.handleFormSubmit(e)}
              >
                Submit
              </button>
              <button
                type="button"
                className="btn btn-success"
                id="createNewAccountButton"
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
    )
  
}

export default LoginForm;
