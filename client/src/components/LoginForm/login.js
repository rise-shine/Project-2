import React from "react";
import "./login.css";
import axios from "axios";


export default class LoginForm extends React.Component {
  
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);

    this.state = {
      show: false,
      name: "",
      email: "",
      password: "",
      userID: 0
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSignUp = event => {

    event.preventDefault();

    const { name, email, password } = this.state;
    
    axios.post("/api/user/create", { name, email, password })
      .then(response => {

        console.log(response);
        this.setState({
          userID: response.data.userID,
          show: false
        })

        console.log(this.state)

      });

     
  }

  handleFormSubmit = event => {
    //need to add logic to check this data with database

    event.preventDefault();

    // const { name, email, password } = this.state;

    // axios.post("/api/user/create", { name, email, password })
    //   .then(response => {
    //     this.setState({
    //       userID: response.data.id,
    //       show: false
    //     })
    //   });

    this.setState({
      name: "",
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div className="container">

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
                  Create a new Account. Enter your name, an email address and password.
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
                    value={this.state.name}
                    name="name"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    className="form-control"
                    value={this.state.email}
                    name="email"
                    onChange={this.handleInputChange}
                    type="email"
                    placeholder="Email Address"
                  />
                  <input
                    className="form-control"
                    value={this.state.password}
                    name="password"
                    onChange={this.handleInputChange}
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
                  onClick={this.handleSignUp}
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
            src={require("../../images/giftbox.jpg")}
            className="img-fluid"
            alt="gift boxes"
          />
        </div>
        <div className="row" id="spacer" />
        <div className="row" id="form">
          <div className="col-sm" />
          <div className="col-sm-6">

          {
            this.state.userID > 0 ? <p>Welcome user number {this.state.userID}</p> : null
          }
          
            <form className="form-group">
              <input
                className="form-control"
                value={this.state.email}
                name="email"
                onChange={this.handleInputChange}
                type="email"
                placeholder="Email Address"
              />
              <input
                className="form-control"
                value={this.state.password}
                name="password"
                onChange={this.handleInputChange}
                type="password"
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
