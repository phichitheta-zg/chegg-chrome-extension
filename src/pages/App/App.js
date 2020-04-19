import React from 'react';
import './App.css';
import Example from '../Example/Example';
import Login from "../Login/Login"

require('dotenv').config();

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
