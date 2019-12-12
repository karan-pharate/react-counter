import React, { Component } from "react";
import Display from "./Display";
import "./App.css";
import "./Display.css";
import "./Buttons.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  refresh = () => {
    this.setState({ count: 0 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <div className="container">
          <h2>Counter</h2>
          <Display count={this.state.count} />
          <button onClick={this.increment} className="btn increment">
            +
          </button>
          <button onClick={this.refresh} className="btn refresh">
            Refresh
          </button>
          <button onClick={this.decrement} className="btn decrement">
            -
          </button>{" "}
        </div>
      </div>
    );
  }
}

export default App;
