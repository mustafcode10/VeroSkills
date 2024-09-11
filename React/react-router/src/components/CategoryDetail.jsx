import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CategoryDetail = () => {
  const { categoryID } = useParams();
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate(`/product`);
  };

  return (
    <div>
      <h1>Category Details for Category ID: {categoryID}</h1>
      <button onClick={goToProducts}>View Products</button>
    </div>
  );
};

export default CategoryDetail;

