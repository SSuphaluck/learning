import { useState } from 'react';
import './App.css';

function App() {
  console.log('Appp execute');
  // let count = 0;

  // useState return Array ที่มี length เท่ากับ 2 เสมอ => [0, function]
  // element ตัวแรก คือค่า state = 0
  // element ตัวที่สอง คือ ฟังก์ชั่นที่ใช้ในการ update state
  const state = useState(0);
  const [stateDe, fnState] = useState(0);
  // Convention Best Practice
  const [count, setCount] = useState(0);
  const [carts, setCarts] = useState([]);

  const handleClickAdd = () => {
    // Not Working
    // count++;
    // console.log(count);

    // state[1](state[0] + 1);

    //count = count + 1;  // don't update state directly

    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // ใช้ในกรณีค่า next state ขึ้นอยู่กับค่า state เดิม (เช่นจาก 1 ไป 2, 2 ไป 3 ...)
    // setCount(callback)
    setCount((currentCount) => {
      //currentCount = 0
      console.log(count, 1, currentCount);
      return currentCount + 1; // 1
    });
    setCount((currentCount) => {
      //currentCount = 1
      console.log(count, 2, currentCount);
      return currentCount + 1; // 2
    });
    setCount((currentCount) => {
      //currentCount = 2
      console.log(count, 3, currentCount);
      return currentCount + 1; // 3
    });
    setCount((currentCount) => {
      //currentCount = 3
      console.log(count, 4, currentCount);
      return currentCount + 1; // 4
    });
    setCount((currentCount) => {
      //currentCount = 4
      console.log(count, 5, currentCount);
      return currentCount + 1; // 5
    });
    console.log(count);
  };

  const handleClickSubtrack = () => {
    // if (count > 0) {
    //   // Not Working
    //   // count--;
    //   // console.log(count);
    // }
    // if (state[0] > 0) {
    //   state[1](state[0] - 1);
    // }
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Test />
      <div style={{ justifyContent: 'center', display: 'flex', gap: '24px' }}>
        {/* {Test()} ===> <h1>Test</h1> */}
        <button onClick={handleClickAdd}>+</button>
        <span> {count} </span>
        <button onClick={handleClickSubtrack}>-</button>
      </div>
    </div>
  );
}

function Test() {
  const stateTest = useState(0);
  console.log('Test');
  return <h1 onClick={() => stateTest[1](stateTest[0] + 1)}>Test</h1>;
}

export default App;
