import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.password});`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          ></input>
          <label>password</label>
          <input
            type="text"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          ></input>
          <label>
            <select>
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="Vue">Vue</option>
            </select>
          </label>
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default Form;
