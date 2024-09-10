import React from 'react'
import { useNavigate } from 'react-router-dom'

function Product() {
    const navigate = useNavigate()
  return (
    <div>
        <h2>Product</h2>
        <button onClick={()=> navigate('/:category')}>Category</button>
    </div>
  )
}

export default Product