import React, { Component } from 'react';
import LengthConverter from './components/length_converter';
import './stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="application">
        <LengthConverter />
      </div>
    );
  }
}

export default App;
