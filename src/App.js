import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "../src/screens/Home.js";
require("dotenv").config();

function App() {
  return (
    <div className="App" style={{ height: 180, width: 360 }}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to unload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Home />
    </div>
  );
}

export default App;
