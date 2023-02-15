import logo from './logo.svg';
import './App.css';

function App() {
  const handleCheckboxChange = (event) => {
    const { name, value, checked } = event.target;
    console.log('Name: ', name);
    console.log('Value: ', value);
    console.log('Checked: ', checked ? 'tick' : 'untick');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1> Lab 1</h1>
      <input
        type="text"
        onChange={(event) => console.log(event.target.value)}
      />
      <hr />
      <h1> Lab 2</h1>
      <div>
        <select onChange={(event) => console.log(event.target.value)}>
          <option value="">เลือกประเทศ</option>
          <option value="ประเทศไทย">ประเทศไทย</option>
          <option value="ประเทศญี่ปุ่น">ประเทศญี่ปุ่น</option>
          <option value="สหรัฐอเมริกา">สหรัฐอเมริกา</option>
          <option value="ออสเตรเลีย">ออสเตรเลีย</option>
          <option value="แคนาดา">แคนาดา</option>
        </select>
      </div>
      <hr />
      <h1> Lab 3</h1>
      <div>
        <label>
          <input
            type="checkbox"
            name="phoneBrand"
            value="Apple"
            onChange={handleCheckboxChange}
          />
          Apple
        </label>

        <label>
          <input
            type="checkbox"
            name="phoneBrand"
            value="Samsung Hero"
            onChange={handleCheckboxChange}
          />
          Samsung Hero
        </label>

        <label>
          <input
            type="checkbox"
            name="phoneBrand"
            value="Nokia 3310"
            onChange={handleCheckboxChange}
          />
          Nokia 3310
        </label>
      </div>
      <hr />
      <h1>Lab 4</h1>
      <a
        href="https://google.com"
        onClick={(event) => {
          event.preventDefault();
          if (window.confirm('Leave for https://google.com?')) {
            window.location.href = 'https://google.com';
            // window.location.assign('https://google.com');
          }
        }}
      >
        Google
      </a>
      <hr />
    </div>
  );
}

export default App;
