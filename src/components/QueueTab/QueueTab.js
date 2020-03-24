import React from 'react';
import './QueueTab.css';

// Example of stylesheet styling
const QueueTab = (props) => {
  const { user } = props;
  return (
    <div className="QueueTab">
      <p>{user.name}</p>
    </div>
  );
};

export default QueueTab;
