import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title"> <div className="show-classname">.App-title </div> Demo CSS Grids</h1>
        <header className="App-header">
          <div className="show-classname">.App-header </div>
          <img src={logo} alt="logo" className="App-logo"/>
        </header>
        <main className="main">
          <div className="show-classname">.main</div>
          <ul>
            <li>
              <a>
                <h2>Headline 1</h2>
                <p>Author 1</p>
              </a>
            </li>
            <li>
              <a>
                <h2>Headline 1</h2>
                <p>Author 1</p>
              </a>
            </li>
            <li>
              <a>
                <h2>Headline 1</h2>
                <p>Author 1</p>
              </a>
            </li>
            <li>
              <a>
                <h2>Headline 1</h2>
                <p>Author 1</p>
              </a>
            </li>
            <li>
              <a>
                <h2>Headline 1</h2>
                <p>Author 1</p>
              </a>
            </li>
            <li>
              <a>
                <h2>Headline 1</h2>
                <p>Author 1</p>
              </a>
            </li>
          </ul>
        </main>
        <aside className="aside">
          <div className="show-classname">.aside </div>
          <div className="something something_1">
            Something 1
          </div>
          <div className="something something_2">
            Something 2
          </div>
          <div className="something something_3">
            Something 3
          </div>
          <div className="something something_4">
            Something 4
          </div>
        </aside>
        <footer className="footer">
          <div className="show-classname">.footer </div>
          Quintype: 
          #29, 3rd Floor, 
          Old Airport Road,    
          Opposite Kemp Fort Mall,
          Murgesh Palya, 
          Bengaluru, Karnataka 560017
        </footer>
      </div>
      );
}
}

export default App;
