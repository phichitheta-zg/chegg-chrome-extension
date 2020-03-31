import React, { useState } from 'react';
import  styles from './LoginButton';

// Example of inline styling and functional components + hooks
function QueueButton() {
  const [usersInQueue, addUser] = useState(0);

  return (
    <button
      type="button"
      onClick={() => {
        addUser(usersInQueue + 1);
      }}
    style = {{ 
      ...styles.Button,
      backgroundColor: 'rgba(122, 122, 122, 0.1)',
    }}
    >
      +
    </button>
  );
}

export default QueueButton;
