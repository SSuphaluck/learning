import './App.css';
import { useState } from 'react';

const data = {
  chiangmai: ['Mae Chaem', 'Chom Tong', 'Hang Dong', 'Mueng'],
  chiangrai: ['Wiang Chai', 'Chiang Khong', 'Thoeng', 'Phan']
};

function App() {
  // Lab 1
  const [hiddenBtn, setHiddenBtn] = useState(true);

  // Lab 2
  const [hiddenText, setHiddenText] = useState(true);

  // Lab 3
  const [hideShowText, setHideShowText] = useState(true);

  // Lab 4
  const [usd, setUsd] = useState('');
  const [thb, setThb] = useState('');
  const usdChange = (event) => {
    const amount = event.target.value;
    setUsd(amount);
    setThb(amount * 30);
  };

  // Lab 5
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  // Lab 6
  const [district, setDistrict] = useState([]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Lab 1</h1>
      {hiddenBtn && (
        <button onClick={() => setHiddenBtn(false)}>Click to hide me</button>
      )}
      <h1>Lab 2</h1>
      <button onClick={() => setHiddenText(false)}>Click to hide text</button>
      {hiddenText && <h3 onChange={() => setHiddenText(false)}>Text</h3>}
      <h1>Lab 3</h1>
      <button onClick={() => setHideShowText(!hideShowText)}>
        {hideShowText ? 'Hide' : 'Show'}
      </button>
      {hideShowText && <p>Lorem ipsum dolor sit</p>}
      <h1>Lab 4</h1>
      <label>Enter Dollar: </label>
      <input
        value={usd}
        onChange={usdChange}
      />
      <p>
        Convert to Bath: <span style={{ color: 'red' }}>{thb}</span> Bath
      </p>
      <h1>Lab 5</h1>
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => {
          setError('');
          setPhoneNumber(e.target.value);
        }}
        style={{
          border: error ? '1px solid red' : '1px solid black',
          borderRadius: '3px'
        }}
      />{' '}
      <button
        onClick={() => {
          if (phoneNumber === '') {
            setError('Phone Number is required.');
          } else if (isNaN(phoneNumber)) {
            setError('Phone Number is invalid.');
          } else if (phoneNumber.length !== 10) {
            setError('Invalid length.');
          } else {
            alert('Your number is valid.');
            setError('');
          }
        }}
      >
        Check
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h1>Lab 6</h1>
      <p>
        <label htmlFor="province">Province: </label>
        <select
          id="province"
          onChange={(event) => {
            setDistrict(data[event.target.value]);
          }}
        >
          <option value="">กรุณาเลือกจังหวัด</option>
          <option value="chiangmai">Chiang Mai</option>
          <option value="chiangrai">Chiang Rai</option>
        </select>
      </p>
      <p>
        <label htmlFor="district">District: </label>
        <select id="district">
          <option value="">กรุณาเลือกอำเภอ</option>
          {district.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>
      </p>
    </div>
  );
}

export default App;
