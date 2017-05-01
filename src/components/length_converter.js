// Calculator widget
import React, { Component } from 'react';
import LengthInput from './length_input';
import HiddenSubmit from './hidden_submit';
import validateUnit from '../functions/validate_unit';
import assignConversion from '../functions/assign_conversion';
import convert from '../functions/convert';

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
    this.setState({value: ev.target.value, inputA: true});
  }
  handleChangeB(ev) {
    this.setState({value: ev.target.value, inputA: false});
  }
  handleSubmit(ev) {
    if (validateUnit(ev.target.inputA.value) || validateUnit(ev.target.inputB.value)) {
      this.state.inputA ?
        this.setState({unitA: ev.target.inputA.value, value: ''}) : 
        this.setState({unitB: ev.target.inputB.value, value: ''});
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
            unit={this.state.unitA} onChange={this.handleChangeA}  autoFocus="true"
            value={this.state.inputA ? VALUE : convert(VALUE, BTOA)} />
          <LengthInput name="inputB"
            unit={this.state.unitB} onChange={this.handleChangeB}
            value={this.state.inputA ? convert(VALUE, ATOB) : VALUE} />
          <HiddenSubmit />
        </form>
      </div>

    );
  }
}

export default LengthConverter;
//
