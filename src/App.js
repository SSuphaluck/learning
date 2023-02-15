import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = () => {
    console.log('Clickeddddddddd');
  };

  const handleInputChange = (event) => {
    console.log('handle input change');
    console.log(event);
  };

  const handleClickBtn = (event, name) => {
    console.log(event, name);
  };

  const handleClickAnotherBtn = (name) => () => {
    console.log(name);
    window.confirm('Are you ok?');
  };

  return (
    <div>
      <button
        // handleClickAnotherBtn(3) ====> () => {console.log(3)}
        onClick={handleClickAnotherBtn(3)}
      >
        Click Three
      </button>
      <button
        // pass anonymous value to handing funcrion #1
        onClick={(event) => {
          handleClickBtn(event, 1);
        }}
      >
        Click One{' '}
      </button>
      <button
        onClick={(event) => {
          handleClickBtn(event, 2);
        }}
      >
        Click Two{' '}
      </button>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          //manual sent request to server
          console.log(event);
        }}
      >
        <input
          type="text"
          // เมื่อมีการเปลี่ยนค่าใน input browser จะ pass event object เข้ามาใน parameter ของ handler function
          onChange={function (event) {
            console.log(event);
            console.log(event.target.value);
          }}
        />
        <input
          // เมื่อมีการเปลี่ยนค่าใน input browser จะ execute handleInputChange(event)
          // [จะเรียกใช้ฟังก์ชัน handleInputChange()
          // โดยการส่งค่า event object เข้ามาในฟังก์ชั่น handleInputChange() ]
          type="text"
          onChange={handleInputChange}
        />
        <button>Submit Form</button>
        <button type="button">Cancle</button>
      </form>
      {/* <input
      type="text"
      onChange={() => {
        console.log('change input');
      }}
    <input
      type="text"
      onChange={function () {
        console.log('input change function expression');
      }}
    />
    <button
      onClick={() => {
        console.log('Click Ano Button');
      }}
    >
      Click Ano
    </button>
    <button onClick={handleClick}>Click</button>; */}
    </div>
  );
}

export default App;
