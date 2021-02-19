import React, { Component } from 'react';
import logo from './logo.svg';
import linkedInLogo from './linkedin.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <div className="content"></div>
        <div className="content">
          <nav>
              Menu1 | Menu2
          </nav>
          <div className="sub-content">
            <img src={logo} className="logo" alt="logo" />
          </div>
        </div>
      </main>
      // <div className="App">
      //     <img src={logo} className="App-logo" alt="logo" />
      //   <p className="App-intro">
      //     <a href='https://www.linkedin.com/in/j%C3%B6rgen-thelin-48693a29/' target='self'>
      //       <img src={linkedInLogo} className="App-logo-linkedin" alt="logo" />
      //     </a>
      //   </p>
      // </div>
    );
  }
}

export default App;
