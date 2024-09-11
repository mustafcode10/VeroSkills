// import React from 'react'
// import { useParams, useNavigate } from 'react-router-dom'


// function Category() {
//     const {category} = useParams()
//     const navigate = useNavigate()
//     console.log(category)
//   return (
//     <div>
//         <h2>Category</h2>
//         <button onClick={()=> navigate('/product')} >Product</button>
//         <button onClick={()=> navigate('/')}>Home</button>
//     </div>
//   )
// }

// export default Category

import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
  const categories = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Books' },
    { id: 3, name: 'Clothing' },
  ];

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
