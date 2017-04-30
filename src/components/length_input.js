import React, { Component } from 'react';
import '../App.css';

class LengthInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.props.onChange(ev);
  }
  render() {
    return (
      <input
        type="text"
        autoFocus={this.props.autoFocus}
        name={this.props.name}
        value={this.props.value}
        placeholder={this.props.unit}
        onChange={this.handleChange} />
    );
  }
}

export default LengthInput;
