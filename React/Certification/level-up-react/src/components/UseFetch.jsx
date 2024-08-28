import {useEffect, useState} from 'react'
// Implement a custom React hook named useFetch that fetches data from an API and returns the data along with loading and error states.
function UseFetch() {
  const [arr, setArr] = useState([]);
  useEffect(() => {
     fetch(`https://jsonplaceholder.typicode.com/posts/1`)
     .then(response => response.json())
     .then(data => setArr(data.body))
     .catch(error => console.error('Erroe', error))
     
 }, []);

 console.log('--------', arr, )

return (
<>
 <div>
     <p>{arr}</p>
 </div>
</>
)
}

export default UseFetch