import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Lab 1
// const fullName = 'Jack Son';
// const birthYear = '1995';
// const element = (
//   <div>
//     <h1>{fullName}</h1>
//     <p>{birthYear}</p>
//   </div>
// );

// Lab 2
const height = 1.54;
const weight = 60;
const calcBMI = (h, w) => w / h ** 2;
const element = (
  <div>
    {' '}
    <h1>{calcBMI(height, weight)}</h1>{' '}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
