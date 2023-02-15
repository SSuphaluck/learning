import logo from './logo.svg';
import { Component, useState } from 'react';
import './App.css';

// Lab 1
export class Lab extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div
        className="App"
        style={{
          marginTop: '50px',
          textAlign: 'center',
          fontSize: '3em'
        }}
      >
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
        <span> {this.state.count} </span>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          -
        </button>
        <span> </span>
        <button onClick={() => this.setState({ count: 0 })}>Reset</button>
      </div>
    );
  }
}

// Lab 2
export const TodoList = () => {
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
    <div
      style={{
        marginTop: '50px',
        paddingTop: '20px',
        textAlign: 'center',
        width: '850px',
        height: 'auto',
        border: '5px solid pink',
        borderRadius: '20px'
      }}
    >
      <div>
        <button onClick={handleAdd}>Add</button>{' '}
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
              <div style={{ paddingLeft: '6px', textAlign: 'left' }}>
                <button
                  onClick={() => {
                    handleEdit(index, editText);
                    setEditIndex(null);
                  }}
                >
                  Save
                </button>{' '}
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  style={{
                    width: '552px',
                    border: '1px solid rgb(156, 159, 169)'
                  }}
                />
              </div>
            ) : (
              <div style={{ paddingRight: '45px', textAlign: 'right' }}>
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
