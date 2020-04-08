import React from 'react';
import './App.css';
import ExamplePage from './pages/ExamplePage/ExamplePage';

require('dotenv').config();

function App() {
  return (
    <div className="App">
      <ExamplePage />
    </div>
  );
}

export default App;
