import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
    };
  }
  handler = () => {
    this.setState({ message: "Bye!" });
  };

  render() {
    return (
      <div>
        {this.state.message}
        <button onClick={this.handler}>click</button>
      </div>
    );
  }
}

export default EventBind;
