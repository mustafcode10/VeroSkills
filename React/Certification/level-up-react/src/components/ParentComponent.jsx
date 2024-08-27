import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [message, setMessage] = useState('');

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div>
      <h1>Message from Child: {message}</h1>
      <ChildComponent onSendMessage={handleMessage} />
    </div>
  );
};

export default ParentComponent;