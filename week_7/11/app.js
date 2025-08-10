import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleClickSynthetic = this.handleClickSynthetic.bind(this);
  }

  // Function 1: Increments counter
  increment = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
  };

  // Function 2: Say hello
  sayHello = () => {
    alert("Hello! Currency Convertor!!!");
  };

  // Function to invoke both
  handleIncrement = () => {
    this.increment();
    this.sayHello();
  };

  // Function to decrement counter
  handleDecrement() {
    this.setState(prev => ({ count: prev.count - 1 }));
  }

  // Function with argument
  sayWelcome = (msg) => {
    alert(msg);
  };

  // Synthetic Event Handler
  handleClickSynthetic(e) {
    e.preventDefault();
    alert("I was clicked");
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>React Event Examples</h1>

        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>

        <br /><br />

        <button onClick={() => this.sayWelcome("Welcome to Currency Convertor!!!")}>
          Say Welcome
        </button>

        <br /><br />

        <button onClick={this.handleClickSynthetic}>
          Click on me
        </button>

        <br /><br />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
