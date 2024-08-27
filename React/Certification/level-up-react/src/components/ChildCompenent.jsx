// import {useRef} from 'react'
// import Display from './Display'


// function ChilCompenent({children}) {
//   const name = useRef
//   return (
//    <>
//    {children}
//     <Display ref={name}  />
//    </>
//   )
// }

// export default ChilCompenent




import React, { useState } from 'react';

const ChildComponent = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    onSendMessage(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}>Send to Parent</button>
    </div>
  );
};

export default ChildComponent;



