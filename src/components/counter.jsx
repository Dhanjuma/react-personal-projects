import React from "react";

export class Counter extends React.Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <br />
        <div>Count : {this.state.count}</div>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Decrement
        </button>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <br />
      </div>
    );
  }
}
