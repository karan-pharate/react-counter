import React, { Component } from "react";
class Display extends Component {
  render() {
    return (
      <div className="display">
        <h1>
          <span>{this.props.count}</span>
        </h1>
      </div>
    );
  }
}

export default Display;
