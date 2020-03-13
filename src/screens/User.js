import React from 'react';
import PCTLogo from '../assets/PCT-logo.png';

export default class User extends React.Component {
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
        <p>Who is this? </p>
        <input
          type="text"
          name="username"
          placeholder="username"
          className="inputs"
          ref={(input) => {
            this.usernameInput = input;
          }}
          style={{
            width: '200px',
            height: '25px',
            backgroundColor: 'rgba(122, 122, 122, 0.1)',
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
