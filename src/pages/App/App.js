import React from 'react';
import './App.css';
import Example from '../Example/Example';
import { withFirebase } from '../../utils/Firebase';

function App() {
  return (
    <div className="App">
      <Example />
    </div>
  );
}

export default withFirebase(App);
