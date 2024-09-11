// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// function Producty() {
//     const navigate = useNavigate()
//   return (
//     <div>
//         <h2>Product</h2>
//         <button onClick={()=> navigate(`/category`)}>Category</button>
//     </div>
//   )
// }

// export default Producty

import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  const products = [
    { id: 1, name: 'Laptop', category: 'Electronics' },
    { id: 2, name: 'Novel', category: 'Books' },
    { id: 3, name: 'T-Shirt', category: 'Clothing' },
  ];

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;


