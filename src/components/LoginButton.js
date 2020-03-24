import React from 'react';

// Example of css in js
// Notice any similarities in the styles? If styles overlap, you can combine them!
// ex.
// const styles = {
//   button: {
//     display: "flex",
//     width: "200px",
//     height: "30px"
//   }
// };
//
// To make a white button with the same size, instead of making a new style object, I can do:
// <Button style={{...styles.button, color: "white"}}/>
//
// This uses object destructuring to get the fields of styles.button,
// then you can add parameters on top of it (or overwrite existing ones)
// Try it below!!

const styles = {
  onlineUserButton: {
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
  },
  freeUserButton: {
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
  },
};

const onlineUserButton = (props) => {
  const { user } = props;
  return (
    <div style={styles.onlineUserButton}>
      <p>{user.name}</p>
    </div>
  );
};

const freeUserButton = (
  <div style={styles.freeUserButton}>
    <p> Log in now! </p>
  </div>
);

const LoginButton = (props) => {
  if (props.user.name) return onlineUserButton(props);
  return freeUserButton;
};

export default LoginButton;
