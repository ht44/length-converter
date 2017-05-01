import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

window.onload = function () {
  window.onkeydown = function(ev) {
    if (ev.keyCode === 37) {
      document.querySelector(".length-converter > form > input[name='inputA']").focus();
    } else if (ev.keyCode === 39) {
      document.querySelector(".length-converter > form > input[name='inputB']").focus();
    }
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
