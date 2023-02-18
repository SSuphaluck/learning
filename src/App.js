import './index.css';
import { useState } from 'react';

function App() {
  // Lab 1
  const friends = [
    'firend1',
    'firend2',
    'firend3',
    'firend4',
    'firend5',
    'firend6'
  ];

  // Lab 2, 3
  let posts = [
    {
      id: 1,
      message: 'Happy new year',
      date: '1/1/2021',
      time: '00.01AM',
      author: 'John'
    },
    {
      id: 2,
      message: 'Programing is fun',
      date: '30/6/2021',
      time: '10.23AM',
      author: 'Jack'
    },
    {
      id: 3,
      message: 'Oh Amazing !!!',
      date: '23/7/2021',
      time: '08.17PM',
      author: 'Sarah'
    }
  ];

  // Lab 4
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const [done, setDone] = useState([]);
  const [editText, setEditText] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [search, setSearch] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleAdd = () => {
    setList([...list, text]);
    setText('');
  };

  const handleEdit = (index, newText) => {
    let data = [...list];
    data[index] = newText;
    setList(data);
  };

  const handleDone = (index) => {
    let data = [...list];
    let move = data.splice(index, 1);
    setDone([...done, ...move]);
    setList(data);
  };

  const handleSearch = () => {
    setIsSearching(true);
    setSearchList(list.filter((item) => item.includes(search)));
  };

  const handleClear = () => {
    setIsSearching(false);
    setSearchList([]);
    setSearch('');
  };

  return (
    <div>
      <h1>---------Lab 1---------</h1>
      <ul>
        {friends.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <hr />
      <h1>---------Lab 2, 3---------</h1>
      {posts.map(({ id, message, date, author, time }) => (
        <div
          key={id}
          className="box"
        >
          <h4>{message}</h4>
          <div className="inTheBox">
            <p>Auther: {author}</p>
            <p>
              {date} {time}
            </p>
          </div>
        </div>
      ))}
      <hr />
      <h1>---------Lab 4, 5---------</h1>
      <div className="todolist">
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            style={{ width: '60px' }}
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            style={{ width: '60px' }}
            onClick={isSearching ? handleClear : handleSearch}
          >
            {isSearching ? 'Clear' : 'Search'}
          </button>
        </div>
        <ul style={{ marginLeft: '0', paddingLeft: '0' }}>
          {(isSearching ? searchList : list).map((text, index) => (
            <li key={index}>
              {index === editIndex ? (
                <div>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button
                    style={{ width: '60px' }}
                    onClick={() => {
                      handleEdit(index, editText);
                      setEditIndex(null);
                    }}
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '173px'
                  }}
                >
                  <div>{text}</div>
                  <div>
                    <button onClick={() => setEditIndex(index)}>Edit</button>
                    <button
                      style={{ marginLeft: '10px' }}
                      onClick={() => handleDone(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
