import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Lab 1
// function Profile() {
//   const name = 'John Doe';
//   const age = 27;
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h2>Age: {age}</h2>
//     </div>
//   );
// }

// Lab 2
// function Car(props) {
//   console.log(props.brand); // * Honda เพราะเข้าถึง property "brand" ของ object "props"
//   console.log(props.price); // ** 1000000 เพราะเข้าถึง property "price" ของ object "props"
//   console.log(props.color); // *** undefined เพราะไม่มี property ที่มีค่าของ color
//   return <div>Car</div>;
// }
// ReactDOM.render(<Car brand="Honda" price="1000000" />, document.getElementById('root'));

// Lab 3
// function ProductItem(props) {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.price}</h2>
//       <p>{props.description}</p>
//     </div>
//   );
// }

// Lab 4
function ProductItem(props) {
  const { name, price, description } = props.product;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{price}</h2>
      <p>{description}</p>
    </div>
  );
}

const product = {
  name: 'NamPlao',
  price: '123',
  description: 'This is a water'
};

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Profile />);
// root.render(
//   <ProductItem
//     name="Ai"
//     price="12345"
//     description="what"
//   />
// );
root.render(<ProductItem product={product} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
