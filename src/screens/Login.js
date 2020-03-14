import React from 'react';
import PCTLogo from '../assets/PCT-logo.png';

export default class Login extends React.Component {
  render() {
    return (
      <div
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          padding: 10,
        }}
      >
        <img src={PCTLogo} style={{ height: 100 }} resizeMode="contain" alt="logo" />
        <p>Welcome to Phi Chi Theta! </p>
        <input
          type="password"
          name="password"
          placeholder="password"
          className="inputs"
          ref={(input) => {
            this.passwordInput = input;
          }}
          style={{
            width: '200px',
            height: '25px',
            backgroundColor: '#7C899D',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            textAlign: 'center',
            fontSize: '13px',
          }}
        />
      </div>
    );
  }
}
