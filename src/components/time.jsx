import React from "react";

export default class Timer extends React.Component {
  state = {
    time: " ",
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date().toString(),
      });
    }, 1000);
  }

  render() {
    return <div>Its : {this.state.time}</div>;
  }
}
