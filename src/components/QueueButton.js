import React, { useState } from 'react';

// TODO: Remove later, DEPRECATED
function QueueButton() {
  const [usersInQueue, addUser] = useState(0);

  return (
    <button
      type="button"
      onClick={() => {
        addUser(usersInQueue + 1);
        // console.log(`${usersInQueue} users in the queue!`);
      }}
      style={{
        display: 'flex',
        width: '200px',
        height: '30px',
        backgroundColor: 'rgba(122, 122, 122, 0.1)',
        border: 'none',
        borderRadius: '5px',
        color: 'grey',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '20px',
        marginBottom: 10,
      }}
    >
      +
    </button>
  );
}

export default QueueButton;
