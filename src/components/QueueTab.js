import React from 'react';

const QueueTab = (props) => {
  const { user } = props;
  return (
    <div
      style={{
        display: 'flex',
        width: '200px',
        height: '30px',
        backgroundColor: 'rgba(253, 222, 114, 0.87)',
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

export default QueueTab;
