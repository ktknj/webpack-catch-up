import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './style.scss';

console.log('i am printing logs');

alert('hi source-map!');

ReactDOM.render(
  <div>Hello React !!</div>,
  document.getElementById('root'),
);
