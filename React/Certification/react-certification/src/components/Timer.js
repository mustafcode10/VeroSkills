import React,{useEffect, useState} from 'react'
// Create a React component called Timer that displays the current time and updates every second using the useEffect hook.
const Timer = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <p>Current Time: {currentTime}</p>;
};

export default Timer


