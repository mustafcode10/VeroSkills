import {useState, useRef} from 'react'

function Form({title}) {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const emailRef =  useRef(null)

    const handleSubmit =(e)=> {
        e.preventDefault()
        setMessage(`successful sign up ${name} ${emailRef.current.value}`)
        e.target.reset()

    }
  
   
  return (
    <>
    <h1>{title}</h1>
    <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="">name</label>
        <input type="text" name={name}  onChange={(e)=> setName(e.target.value)} />
        </div>
        <div>
        <label htmlFor="">Email</label>
        <input type="email" ref={emailRef} />
        </div>
        <button type='submit'>Sign up</button>
   
    </form>
      <p>{message}</p>
    </>
  )
}

export default Form