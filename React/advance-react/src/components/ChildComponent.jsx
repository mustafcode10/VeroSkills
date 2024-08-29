import {useState} from 'react'

function ChildComponent({onSendMessage}) {
    const [inputValue, setInputValue] = useState('');

    const handleClick =()=>{
       onSendMessage(inputValue)
    }

  return (
   <>
    <input type="text" name={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
    <button onClick={handleClick}>Sent to Parent</button>
   </>
  )
}

export default ChildComponent