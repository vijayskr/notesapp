import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      usrID: "",
      usrPWD: ""
    };
  }
  clearpage = () => {
    this.setState({
      usrID: "",
      usrPWD: ""
    });
  };

  loginvalidate = () => {
    if (this.state.usrID === "admin" && this.state.usrPWD === "admin") {
      this.props.history.push("/notes");
    } else {
      alert("Invalid Inputs to Login");
    }
  };

  userNameChange = e => {
    this.setState({ usrID: e.target.value });
  };
  passChange = e => {
    this.setState({ usrPWD: e.target.value });
  };

  render() {
    return (
      <div className="App-header">
      <label> Login.....</label> { " "}
        <form onSubmit={this.loginvalidate}>
          <div className="form-group">
            <label> User ID: </label>{" "}
            <input
              type="text"
              name="usrID"
              class="form-control"
              value={this.state.usrID}
              onChange={this.userNameChange}
            />
            <label> Password: </label>{" "}
            <input
              type="password"
              name="usrPWD"
              class="form-control"
              value={this.state.usrPWD}
              onChange={this.passChange}
            />
            <br />            <button
              className="btn btn-primary"
              type="submit"
              value="Login">Submit </button>
            <input
              className="btn btn-link"
              type="button"
              value="Cancel"
              onClick={this.clearpage}
            />
          </div>
        </form>
      </div>
    );
  }
}

export { Login };
