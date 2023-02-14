import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Lab 1
// function lab() {
//   return (
//     <div>
//       <span>Hello My Friend</span>
//       <p>Friend list</p>
//       <ul>
//         <li>John</li>
//         <li>Jack</li>
//         <li>Jane</li>
//       </ul>
//     </div>
//   );
// }

// Lab 2
// function lab() {
//   return (
//     <div>
//       <p>
//         <label htmlFor="province">Province : </label>
//         <select
//           name="province"
//           id="province"
//         >
//           <option value="select">Select</option>
//           <option value="chomtong">Chom Tong</option>
//           <option value="maeChaem">Mae Chaem</option>
//           <option value="maeRim">Mae Rim</option>
//         </select>
//       </p>
//       <p>
//         <label htmlFor="district">District : </label>
//         <select
//           name="district"
//           id="district"
//         >
//           <option value="select">Select</option>
//           <option value="chomtong">Chang Kueng</option>
//           <option value="maeChaem">Tong Fay</option>
//           <option value="maeRim">Ban Bon Na</option>
//         </select>
//       </p>
//     </div>
//   );
// }

// Lab 3
// class Lab extends Component {
//   constructor() {
//     super();

//     this.state = {
//       count: 0
//     };
//   }

//   render() {
//     return (
//       <div className="App">
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           +
//         </button>
//         <span> {this.state.count} </span>
//         <button onClick={() => this.setState({ count: this.state.count - 1 })}>
//           -
//         </button>
//         <span> </span>
//         <button onClick={() => this.setState({ count: 0 })}>Reset</button>
//       </div>
//     );
//   }
// }

// Lab 4
const TodoList = () => {
  const [text, textUpdate] = useState('');
  const [list, listUpdate] = useState([]);
  const [done, doneUpdate] = useState([]);
  const [editText, setEditText] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    listUpdate([...list, text]);
    textUpdate('');
  };

  const handleEdit = (index, newText) => {
    let data = [...list];
    data[index] = newText;
    listUpdate(data);
  };

  const handleDone = (index) => {
    let data = [...list];
    let move = data.splice(index, 1);
    doneUpdate([...done, ...move]);
    listUpdate(data);
  };

  return (
    <div>
      <div>
        <button onClick={handleAdd}> Add </button>{' '}
        <input
          type="text"
          value={text}
          onChange={(e) => textUpdate(e.target.value)}
          placeholder="Create a new Todo!"
        />
      </div>
      <ul style={{ listStyle: 'none' }}>
        {list.map((text, index) => (
          <li key={index}>
            {index === editIndex ? (
              <div>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button
                  onClick={() => {
                    handleEdit(index, editText);
                    setEditIndex(null);
                  }}
                >
                  Save
                </button>
              </div>
            ) : (
              <div>
                {text}{' '}
                <span>
                  <button onClick={() => setEditIndex(index)}>Edit</button>{' '}
                  <button onClick={() => handleDone(index)}>Del</button>
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(lab());
// root.render(<Lab />);
root.render(<TodoList />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
