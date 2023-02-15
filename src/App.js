import logo from './logo.svg';
import './App.css';

function App() {
  const handleCheckboxChange = (event) => {
    const checked = () => (event.target.checked === true ? 'tick' : 'untick');
    console.log('Name: ', event.target.name);
    console.log('Value: ', event.target.value);
    console.log('Checked: ', checked());
  };

  const handleClickLink = (event) => {
    const confirmation = window.confirm('Leave for https://google.com?');
    if (!confirmation) {
      event.preventDefault();
      return false;
    }
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
            value="Samsung"
            onChange={handleCheckboxChange}
          />
          Samsung Hero
        </label>

        <label>
          <input
            type="checkbox"
            name="phoneBrand"
            value="Xiaomi"
            onChange={handleCheckboxChange}
          />
          Nokia 3310
        </label>
      </div>
      <hr />
      <h1>Lab 4</h1>
      <button onClick={handleClickLink}>
        <a href="https://google.com">Google</a>
      </button>
      <hr />
    </div>
  );
}

export default App;
