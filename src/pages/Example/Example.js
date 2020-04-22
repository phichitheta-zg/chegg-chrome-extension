import React, { useState } from 'react';
import { withFirebase } from '../../utils/Firebase';
import './Example.css';

function Example(props) {
  const { firebase } = props;
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  function handleLogIn() {
    firebase.doSignInWithEmailAndPassword(username, password).then(() => {
      setError(null);
      // console.log("log in success!");
    }).catch((err) => setError(err));
  }

  function handleLogOut() {
    firebase.doSignOut();
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
      <button type="submit" onClick={handleLogIn}> Log in! </button>
      <button type="submit" onClick={handleLogOut}> Log Out! </button>
      <div className="h6 text-muted mt-3">
        {error && <p>{error.message}</p>}
      </div>
    </div>
  );
}

export default withFirebase(Example);
