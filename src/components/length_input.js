// Reponsive input
import React, { Component } from 'react';

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
        name={this.props.name}
        value={this.props.value}
        autoFocus={this.props.autoFocus}
        placeholder={this.props.unit}
        onChange={this.handleChange} />
    );
  }
}

export default LengthInput;
//
