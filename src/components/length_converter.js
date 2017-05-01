import React, { Component } from 'react';
import '../App.css';
import convert from '../functions/convert';
import assignConversion from '../functions/assign_conversion';
import validateUnit from '../functions/validate_unit';
import LengthInput from './length_input';

class LengthConverter extends Component {
  constructor(props) {
    super(props);
    this.handleChangeA = this.handleChangeA.bind(this);
    this.handleChangeB = this.handleChangeB.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      value: '', unitA: 'miles', unitB: 'feet', inputA: true
    };
  }

  handleChangeA(ev) {
    this.setState({inputA: true, value: ev.target.value});
  }
  handleChangeB(ev) {
    this.setState({inputA: false, value: ev.target.value});
  }
  handleSubmit(ev) {
    if (validateUnit(ev.target.inputA.value) || validateUnit(ev.target.inputB.value)) {
      if (this.state.inputA) this.setState({unitA: ev.target.inputA.value, value: ''});
      if (!this.state.inputA) this.setState({unitB: ev.target.inputB.value, value: ''});
    } else {
      this.setState({value: ''});
    }
    ev.preventDefault();
  }

  render() {
    const VALUE = this.state.value;
    const ATOB = assignConversion(this.state.unitA, this.state.unitB);
    const BTOA = assignConversion(this.state.unitB, this.state.unitA);
    return (
      <div className="length-converter">
        <h1>{this.state.unitA} | {this.state.unitB}</h1>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <LengthInput name="inputA"
            unit={this.state.unitA}
            value={!this.state.inputA ? convert(VALUE, BTOA) : VALUE}
            onChange={this.handleChangeA} autoFocus="true" />
          <LengthInput name="inputB"
            unit={this.state.unitB}
            value={this.state.inputA ? convert(VALUE, ATOB) : VALUE}
            onChange={this.handleChangeB} />
          <input type="submit" value="Submit" hidden/>
        </form>
      </div>
    );
  }
}

export default LengthConverter;
