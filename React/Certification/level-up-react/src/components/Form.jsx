import {useState} from 'react'

function Form(props) {
    const [player, setPlayer] = useState({name: 'mustaf', score: 1});
    
  return (
    <>
     <h2>{props.title}</h2>
      <div>Form</div>
      <button onClick={()=> setPlayer((player)=> ({...player, score: player.score + 1}))}>score</button>
      <p>{player.name} {player.score}</p>
    </>

  
  )
}

export default Form