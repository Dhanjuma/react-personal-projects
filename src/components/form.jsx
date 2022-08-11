import React from "react";

const initialData = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  username: "",
  password: "",
  fnameErr: "",
  lnameErr: "",
  emailErr: "",
  phoneErr: "",
  passwordErr: "",
};

export class Form extends React.Component {
  state = initialData;

  handleChange = (event) => {
    // const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: event.target.value,
      // isCheckbox
      // ? event.target.checked
      // event.target.value,
    });
  };

  validate = () => {
    let fnameErr = "";
    let lnameErr = "";
    let emailErr = "";
    let phoneErr = "";
    let passwordErr = "";

    if (!this.state.fname) {
      fnameErr = "Enter name";
    }

    if (!this.state.lname) {
      lnameErr = "Enter name";
    }

    if (!this.state.email.includes("@")) {
      emailErr = "Invalid email address";
    }

    if (this.state.phone < 11 || isNaN(this.state.phone)) {
      phoneErr = "Invalid phone number";
    }

    if (this.state.password < 5) {
      passwordErr = "Password must be at least 5 characters";
    }

    if (fnameErr || lnameErr || emailErr || phoneErr || passwordErr) {
      this.setState({
        fnameErr,
        lnameErr,
        emailErr,
        phoneErr,
        passwordErr,
      });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      alert("Signup Successful");
      console.log(this.state);
      this.setState(initialData);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <select
            name="titles"
            value={"this.state.title"}
            onChange={this.handleChange}
          >
            <option>Mr.</option>
            <option>Mrs.</option>
            <option>Miss</option>
            <option>Master </option>
          </select>
        </div>

        <div>
          <input
            name="fname"
            placeholder="Firstname"
            value={this.state.fname}
            onChange={this.handleChange}
          ></input>
          <div style={{ fontSize: 15, fontFamily: "monospace", color: "red" }}>
            {this.state.fnameErr}
          </div>
        </div>

        <div>
          <input
            name="lname"
            placeholder="Lastname"
            value={this.state.lname}
            onChange={this.handleChange}
          ></input>
          <div style={{ fontSize: 15, fontFamily: "monospace", color: "red" }}>
            {this.state.lnameErr}
          </div>
        </div>

        <div>
          <input
            name="email"
            placeholder="Email Address"
            value={this.state.email}
            onChange={this.handleChange}
          ></input>
          <div style={{ fontSize: 15, fontFamily: "monospace", color: "red" }}>
            {this.state.emailErr}
          </div>
        </div>

        <div>
          <input
            name="phone"
            placeholder="Phone Number"
            value={this.state.phone}
            onChange={this.handleChange}
          ></input>
          <div
            style={{
              fontSize: 15,
              fontFamily: "monospace",
              color: "red",
            }}
          >
            {this.state.phoneErr}
          </div>
        </div>

        <div>
          <input
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
          ></input>
        </div>
        {/* <div>{this.state.usernameErr}</div> */}

        <div>
          <input
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          ></input>
          <div style={{ fontSize: 15, fontFamily: "monospace", color: "red" }}>
            {this.state.passwordErr}
          </div>
        </div>

        <button type="submit">submit</button>
      </form>
    );
  }
}
