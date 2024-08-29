import {useState} from 'react'
import ChildComponent from './ChildComponent';

function ParentComponent() {
    const [message, setMessage] = useState('');
    const handleMessage = msg => {
         setMessage(msg)
    }
  return (
    <>
    <h1>Message from Child {message}</h1>
    <ChildComponent onSendMessage ={handleMessage} />
    </>
  )
}

export default ParentComponent