import {useEffect, useState} from 'react'
// The component should display a "Loading..." message while the lazy-loaded component is being fetched.
// Implement a React component that lazy loads another component using Suspense.
function ImageLoading() {
    const [image, setimage] = useState([]);
    useEffect(() => {
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(response => response.json())
        .then(data => setimage(data.message))
        .catch(error => console.error('Error', error))
    }, []);
  return (
    <>
    <div>
        <img src={image} alt='Random dog Image' />
    </div>
    </>
  )
}

export default ImageLoading



