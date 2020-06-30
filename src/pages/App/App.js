import React from 'react';
import './App.css';
import Login from '../Login/Login';
import { withFirebase } from '../../utils/firebase';

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default withFirebase(App);
