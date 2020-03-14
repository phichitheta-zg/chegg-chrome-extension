import React from 'react';

const onlineUserButton = (props) => {
  const { user } = props;
  return (
    <div
      style={{
        display: 'flex',
        width: '200px',
        height: '30px',
        backgroundColor: 'rgba(250, 202, 98, 0.849)',
        border: 'none',
        borderRadius: '5px',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '13px',
        marginBottom: 10,
      }}
    >
      <p>{user.name}</p>
    </div>
  );
};

const freeUserButton = (
  <div
    style={{
      display: 'flex',
      width: '200px',
      height: '30px',
      backgroundColor: 'rgba(133, 250, 98, 0.769)',
      border: 'none',
      borderRadius: '5px',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '13px',
      marginBottom: 10,
    }}
  >
    <p> Log in now! </p>
  </div>
);

const LoginButton = (props) => {
  if (this.props.user.name) return onlineUserButton(props);
  return freeUserButton(props);
};

export default LoginButton;
