import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      message: "welcome visitor",
    };
  }

  fun() {
    this.setState({ message: "thanks for subscribing" });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.fun()}>subscribe</button>
      </div>
    );
  }
}

export default Home;
