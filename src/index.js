import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import $ from 'jquery';

window.onload = function () {
  window.onkeydown = function(ev) {
    if (ev.keyCode === 38) {
      document.querySelector(".length-form > input[name='inputA']").focus();
    } else if (ev.keyCode === 40) {
      document.querySelector(".length-form > input[name='inputB']").focus();
    }
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
