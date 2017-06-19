[https://length-converter.surge.sh/](https://length-converter.surge.sh/)

This is a neat little length conversion widget I made to teach myself React. It uses two-way data binding to instantly render a new result whenever there's a change to the values of the inputs.

The user may type a unit of length in the plural (i.e. "meters" or "yards") and hit return to change the conversion equation. The left and right arrow keys will focus the top and bottom inputs, respectively.

These design decisions were inspired by my dislike of touchpads. I wanted to make a conversion calculator that could be operated entirely by keystroke.

Here is the code for the main component. Can convert meters to yards to miles to kilometers to feet to inches to centimeters. Hit return to clear:

```javascript
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
        <p>* Type a unit of length in the plural and hit return to change conversion</p>
        <p>* Use left and right arrow keys to focus top and bottom inputs, respectively</p>
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
```

Something fun about this app was that it required a large number of functions in order to account for every permutation of the units I decided to feature. Below is a delightfully long switch statement that gives you an idea of how many functions I'm talking about:

```javascript
import {mToY, mToF, mToMi, mToK, mToI, mToC} from './conversions/meters';
import {yToM, yToF, yToMi, yToK, yToI, yToC} from './conversions/yards';
import {iToC, iToF, iToY, iToMi, iToM, iToK} from './conversions/inches';
import {fToM, fToY, fToI, fToMi, fToK, fToC} from './conversions/feet';
import {cToI, cToF, cToY, cToMi, cToM, cToK} from './conversions/centimeters';
import {kToF, kToY, kToMi, kToM, kToI, kToC} from './conversions/kilometers';
import {miToF, miToY, miToK, miToM, miToI, miToC} from './conversions/miles';
import mirror from './conversions/mirror';

function assignConversion(unitA, unitB) {
  switch(unitA + ' ' + unitB) {
// FEET // ------------------------------------------
    case 'feet yards':
      return fToY;
    case 'feet meters':
      return fToM;
    case 'feet inches':
      return fToI;
    case 'feet miles':
      return fToMi;
    case 'feet kilometers':
      return fToK;
    case 'feet centimeters':
      return fToC;
// YARDS // -----------------------------------------
    case 'yards feet':
      return yToF;
    case 'yards meters':
      return yToM;
    case 'yards miles':
      return yToMi;
    case 'yards kilometers':
      return yToK;
    case 'yards inches':
      return yToI;
    case 'yards centimeters':
      return yToC;
// MILES // -----------------------------------------
    case 'miles feet':
      return miToF;
    case 'miles yards':
      return miToY;
    case 'miles kilometers':
      return miToK;
    case 'miles meters':
      return miToM;
    case 'miles inches':
      return miToI;
    case 'miles centimeters':
      return miToC;
// KILOMETERS // ------------------------------------
    case 'kilometers feet':
      return kToF;
    case 'kilometers yards':
      return kToY;
    case 'kilometers miles':
      return kToMi;
    case 'kilometers meters':
      return kToM;
    case 'kilometers inches':
      return kToI;
    case 'kilometers centimeters':
      return kToC;
// METERS // ----------------------------------------
    case 'meters yards':
      return mToY;
    case 'meters feet':
      return mToF;
    case 'meters miles':
      return mToMi;
    case 'meters kilometers':
      return mToK;
    case 'meters inches':
      return mToI;
    case 'meters centimeters':
      return mToC;
// INCHES // ----------------------------------------
    case 'inches feet':
      return iToF;
    case 'inches centimeters':
      return iToC;
    case 'inches meters':
      return iToM;
    case 'inches kilometers':
      return iToK;
    case 'inches miles':
      return iToMi;
    case 'inches yards':
      return iToY;
// CENTIMETERS // -----------------------------------
    case 'centimeters inches':
      return cToI;
    case 'centimeters feet':
      return cToF;
    case 'centimeters yards':
      return cToY;
    case 'centimeters miles':
      return cToMi;
    case 'centimeters meters':
      return cToM;
    case 'centimeters kilometers':
      return cToK;
// DEFAULT // ---------------------------------------
    default:
      return mirror;
  }
}

export default assignConversion;
```
