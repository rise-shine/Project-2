import React from "react";

export default class signUpform extends React.Component {
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
      <div className="modal" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
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
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
