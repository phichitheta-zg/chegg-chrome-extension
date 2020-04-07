import React, { useState } from 'react';
import PCTLogo from '../../assets/PCT-logo.png';
import './LoginPage.css';

function LoginPage() {
  const [password, setPassword] = useState();

  function handleChange(event) {
    setPassword(event.target.value);
    console.log(password); // remove this
  }

  return (
    <div className="LoginPage__container">
      <img src={PCTLogo} className="LoginPage__login-logo" alt="logo" />
      <div className="LoginPage__flex">Welcome to Phi Chi Theta!</div>
      <div className="LoginPage__input-container">
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
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
    </div>
  );
}

export default LoginPage;
