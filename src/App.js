import React, { Component } from 'react';

class Toggle extends Component {
  constructor(props) {
    super(props);
    console.log('Toggle Constructor run');
  }

  componentWillUnmount() {
    console.log('Toggle componentWillUnmount run');
  }

  componentDidUpdate() {
    console.log('Toggle componentDidUpdate run');
  }

  componentDidMount() {
    // run only once
    // handle side effect ex. fetch data from server
    console.log('Toggle componentDidMount run');
  }

  render() {
    console.log('Toggle Render run');
    return <div>Toggle</div>;
  }
}

class App extends Component {
  constructor(props) {
    console.log('Constructor run');
    super(props);
    this.state = {
      toggle: false
    };
  }

  // componentDidMount() {
  //   // run only once
  //   // handle side effect ex. fetch data from server
  //   console.log('componentDidMount run');
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate run');
  // }

  render() {
    // console.log('Render run');
    return (
      <div onClick={() => this.setState({ toggle: !this.state.toggle })}>
        Render
        {this.state.toggle && <Toggle />}
      </div>
    );
  }
}

// class App extends Component {
//   state = { count: 0 };
//   render() {
//     return (
//       <div style={{ textAlign: 'center' }}>
//         <h1>Counter App</h1>
//         <CounterHeader
//           count={this.state.count}
//           text="Counter Number"
//         />
//         <Button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           +
//         </Button>
//         <Button>-</Button>
//       </div>
//     );
//   }
// }

// // function CounterHeader(props) {
// //   return <h2>{props.count}</h2>;
// // }

// class CounterHeader extends Component {
//   render() {
//     return <h2>{this.props.count}</h2>;
//   }
// }

// class Button extends Component {
//   render() {
//     return <button onClick={this.props.onClick}>{this.props.children}</button>;
//   }
// }

// class App extends React.Component {}
// class App extends Component {
//   // declare state#1
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       error: ''
//     };
//     this.handleClickDecreaseBtn = this.handleClickDecreaseBtn.bind(this);
//   }

//   // declare state#2
//   state = {
//     count: 0,
//     error: ''
//   };

//   // handleClickDecreaseBtn = () => {
//   //   const { count } = this.state;
//   //   if (count > 0) {
//   //     this.setState({ count: count - 1 });
//   //   }
//   // };

//   handleClickDecreaseBtn() {
//     const { count } = this.state;
//     if (count > 0) {
//       this.setState({ count: count - 1 });
//     }
//   }

//   render() {
//     return (
//       <div style={{ textAlign: 'center' }}>
//         <h1>React Class Component</h1>
//         <h2>{this.state.count}</h2>
//         <button
//           onClick={() => {
//             // updateStateFn: setState
//             this.setState({ count: this.state.count + 1 });
//           }}
//         >
//           +
//         </button>
//         <button onClick={this.handleClickDecreaseBtn}>-</button>
//       </div>
//     );
//   }
// }

export default App;

// class App {
//   // property
//   name = 'John';
//   age = 20;

//   // method

//   constructor() {}

//   getName() {
//     return this.name;
//   }
// }

// const obj = new App();
// พวก use ใช้กับ class component ไม่ได้

// function Con(name) {
//   //this = {}
//   this.name = name;
//   const func = () => {
//     this.
//   }
//   // return this
// }

// const con = new Con('A')

// function b() {
//   console.log(this);
// }
// b();

// const obj = { name: 'John' };
// const a = b.bind(obj);

// a();
