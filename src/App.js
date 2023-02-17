import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [select, setSelect] = useState('Nonthaburi');
  return (
    <div className="App">
      <select
        onChange={(event) => setSelect(event.target.value)}
        value={select}
      >
        <option>Bangkok</option>
        <option>Nonthaburi</option>
        <option>Nan</option>
      </select>

      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      {/* เวลาจะ handle อะไรก็ตามที่อยู่ใน form จะต้องเขียน value และ onChange ให้กับมันเสมอ  */}
      <input
        type="file"
        onChange={(event) => console.log(event.target.files)}
      />
      <textarea rows="10" />
    </div>
  );
}

export default App;
