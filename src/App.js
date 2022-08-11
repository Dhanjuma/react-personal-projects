import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { Counter } from "./components/counter";
import { Form } from "./components/form";
// import { Seconds } from "./components/test";
import Timer from "./components/time";
import { User } from "./components/user";
import { Users } from "./components/users";
import { Warn } from "./components/warn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faPerson } from "@fortawesome/free-solid-svg-icons";
import { Calculator } from "./temperature/calculator";
import { TodoList } from "./todo/todolist";

class App extends React.Component {
  state = {
    count: true,
    btn: true,
  };

  switch = () => {
    this.setState({
      count: !this.state.count,
    });
  };

  handleButton = () => {
    this.setState({
      btn: !this.state.btn,
    });
  };

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}

        <div class="top">
          <div>{this.state.count ? <Counter /> : <Timer />}</div>
          <br />
          <button onClick={this.switch}>Toggle</button>
          <br />
          <br />
        </div>
        {/* <div>
          <Seconds />
        </div> */}
        {/* <br /> */}
        <div className="text">
          <br />
          {this.state.btn ? <Warn /> : <Form />}
          <br />
          {this.state.btn ? (
            <button onClick={this.handleButton}>Signup</button>
          ) : null}
          <br />
          <br />
        </div>
        {/* <br /> */}
        <div className="person">
          <br />
          <div>
            <FontAwesomeIcon icon={faPerson} /> SINGLE PERSON
          </div>
          <User />
          <br />
        </div>
        {/* <br /> */}
        <div className="people">
          <br />
          <div>
            <FontAwesomeIcon icon={faPeopleGroup} /> MULTIPLE PEOPLE
          </div>
          <Users />
          <br />
        </div>
        <div className="calculator">
          <br />
          <Calculator />
          <br />
        </div>
        <div className="todo">
          <br />
          <TodoList />
          <br />
        </div>
      </div>
    );
  }
}

export default App;
