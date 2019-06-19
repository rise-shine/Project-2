import React from "react";

class LoginForm extends React.Component {
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
      <div>
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

          <button className="btn btn-primary" onClick={this.handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default LoginForm;
