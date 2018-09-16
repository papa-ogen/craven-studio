import React from 'react'
import logo from './logo.svg'
import linkedInLogo from './linkedin.svg'

const Header = () => (
  <header className="App-header">
    <nav>
      <a href="https://www.linkedin.com/in/j%C3%B6rgen-thelin-48693a29/" target="self">
        <img src={linkedInLogo} className="App-logo-linkedin" alt="logo" />
      </a>
    </nav>
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to React</h1>
  </header>
)

export default Header
