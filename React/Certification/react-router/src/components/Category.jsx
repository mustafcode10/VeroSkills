import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'


function Category() {
    const {category} = useParams()
    const navigate = useNavigate()
    console.log(category)
  return (
    <div>
        <h2>Category</h2>
        <button onClick={()=> navigate('/product')} >Product</button>
        <button onClick={()=> navigate('/')}>Home</button>
    </div>
  )
}

export default Category