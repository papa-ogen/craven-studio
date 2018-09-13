import React, { Component } from 'react';
import logo from './logo.svg';
import linkedInLogo from './linkedin.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <a href='https://www.linkedin.com/in/j%C3%B6rgen-thelin-48693a29/' target='self'>
            <img src={linkedInLogo} className="App-logo-linkedin" alt="logo" />
          </a>
        </p>
      </div>
    );
  }
}

export default App;
