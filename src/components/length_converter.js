import React, { Component } from 'react';
import convert from '../functions/convert';
import assignConversion from '../functions/assign_conversion';
import validateUnit from '../functions/validate_unit';
import LengthInput from './length_input';
import '../App.css';

class LengthConverter extends Component {
  constructor(props) {
    super(props);
    this.handleChangeA = this.handleChangeA.bind(this);
    this.handleChangeB = this.handleChangeB.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {value: '', unit: 'yards', unitA: 'yards', unitB: 'meters'};
  }

  handleChangeA(ev) {
    this.setState({
      unit: this.state.unitA,
      value: ev.target.value
    });
  }
  handleChangeB(ev) {
    this.setState({
      unit: this.state.unitB,
      value: ev.target.value
    });
  }
  handleSubmit(ev) {
    ev.preventDefault();
    if (validateUnit(ev.target.inputA.value) && ev.target.inputA.value !== this.state.unitB) {
      const VALUE = ev.target.inputA.value;
      this.setState(prevState => ({
        unit: VALUE,
        unitA: VALUE,
        value: ''
      }));
    } else if (validateUnit(ev.target.inputB.value) && ev.target.inputB.value !== this.state.unitA) {
      const VALUE = ev.target.inputB.value
      this.setState(prevState => ({
        unit: VALUE,
        unitB: VALUE,
        value: ''
      }));
    } else {
      this.setState({value: ''});
    }
  }
  render() {
    const VALUE = this.state.value;
    const UNIT = this.state.unit;
    const UNITA = this.state.unitA;
    const UNITB = this.state.unitB;
    const ATOB = assignConversion(UNITA, UNITB);
    const BTOA = assignConversion(UNITB, UNITA);
    const VALUEA = UNIT === UNITB ? convert(VALUE, BTOA) : VALUE;
    const VALUEB = UNIT === UNITA ? convert(VALUE, ATOB) : VALUE;
    return (
      <div className="length-calc">
        <h1>{UNITA} | {UNITB}</h1>
        <form className="length-form" onSubmit={this.handleSubmit} autoComplete="off">
          <LengthInput name="inputA" value={VALUEA} unit={UNITA} onChange={this.handleChangeA} autoFocus="true" />
          <LengthInput name="inputB" value={VALUEB} unit={UNITB} onChange={this.handleChangeB}/>
          <input type="submit" value="Submit" hidden/>
        </form>
      </div>
    );
  }
}

export default LengthConverter;
