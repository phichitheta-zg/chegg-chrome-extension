import React, { useState, useEffect } from 'react';
import { withFirebase } from '../../utils/Firebase';
import './Example.css';

function Example(props) {
  const { firebase } = props;
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function handleSubmit() {
    console.log(username);
    console.log(password);
    console.log(props);
    firebase.doCreateUserWithEmailAndPassword(username, password);
  }

  return (
    <div className="Example__container">
      {/* Put whatever you want in here for easy testing! */}
      <div className="Login__input-container">
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          style={{
            flex: 1,
            width: '100%',
            height: '65%',
            backgroundColor: '#7C899D',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            textAlign: 'center',
          }}
        />
      </div>
      <div className="Login__input-container">
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          style={{
            flex: 1,
            width: '100%',
            height: '65%',
            backgroundColor: '#7C899D',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            textAlign: 'center',
          }}
        />
      </div>
      <button onClick={handleSubmit}> Log in! </button>
    </div>
  );
}

export default withFirebase(Example);
