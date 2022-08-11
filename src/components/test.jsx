import React from "react";

export class Seconds extends React.Component {
  state = { count: 0 };

  componentDidMount() {
    // const intervalId =
    setInterval(() => {
      this.setState((prevState) => {
        return {
          count: prevState.count + 1,
        };
      });
    }, 1000);
  }

  // componentWillUnmount(){
  //   clearInterval(intervalId);
  // }

  render() {
    return (
      <h1>The component has been rendered for {this.state.count} seconds</h1>
    );
  }
}
