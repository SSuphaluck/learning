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
//     <p>{2023 - birthYear}</p>
//   </div>
// );

// Lab 2
// const height = 1.54;
// const weight = 60;
// const calcBMI = (h, w) => w / h ** 2;
// const element = (
//   <div>
//     {' '}
//     <h1>{calcBMI(height, weight)}</h1>{' '}
//   </div>
// );

// Lab 3
// const element = (
//   <div>
//     <label htmlFor="username">Username : </label>
//     <input
//       className="username"
//       id="username"
//       name="username"
//     ></input>
//   </div>
// );

// Lab 4
// function App() {
//   return (
//     <h1>Welcome to Thailand</h1>
//     <h2>Land of smile</h2>
//   );
// }
// not working [JSX expressions must have one parent element.]

// Lab 5
// function App() {
//   return (
//     <div>
//       <span>My name is John.</span>
//       <br>
//       <span>I'm 27 years old.</span>
//     </div>
//   );
// }
// not working [JSX element 'br' has no corresponding closing tag.]

// Lab 6
function element() {
  const myString = 'This data type is String';
  const myNumber = 123;
  const myBoolean = true;
  const myNull = null;
  const myUndefined = undefined;
  const myObject = { name: 'John', age: 30 };

  return (
    <div>
      <p>{myString}</p>
      <p>{myNumber}</p>
      <p>{myBoolean ? 'True' : 'False'}</p>
      <p>{String(myNull)}</p>
      <p>{String(myUndefined)}</p>
      <p>
        {myObject.name} is {myObject.age} years old.
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
root.render(element());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
