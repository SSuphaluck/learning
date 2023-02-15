import logo from './logo.svg';
// import './App.css';
// import './index.css';
import classes from './App.module.css';

// CSS Style
//1. inline CSS
//2. External style sheet
//3. CSS Module
//4. CSS in JS

const style = {
  width: '175px',
  height: '150px',
  border: '3px solid red'
};

function App() {
  return (
    // 1. inline CSS
    // <div style={style}>
    //   <h1 style={{ wigth: '100px', height: '100px', border: '2px solid pink' }}>
    //     Inline CSS
    //   </h1>
    // </div>

    //2. external CSS
    // <div className="w-200 h-100 border-green-2 border-red-4">External CSS</div>

    //3. CSS Module
    <div className={classes.test}>CSS Module</div>
  );
}

export default App;
