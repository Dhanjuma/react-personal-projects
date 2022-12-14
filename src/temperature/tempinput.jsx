import React from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

export class TemperatureInput extends React.Component {
  handleChange = (e) => {
    this.props.onTemperatureChange(e.target.value);
  };

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>
          Enter temperature in
          {scaleNames[scale]}:
        </legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
