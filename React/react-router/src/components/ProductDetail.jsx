import React from 'react';
import { useParams } from 'react-router-dom';
import Logout from './Logout';

const ProductDetail = () => {
  const { productID } = useParams();

  const products = {
    1: { name: 'Laptop', description: 'High-performance laptop', price: '$1200' },
    2: { name: 'Novel', description: 'A fascinating book', price: '$20' },
    3: { name: 'T-Shirt', description: 'A stylish T-Shirt', price: '$30' },
  };

  const product = products[productID];

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <>
        <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
    </div>
    <Logout />
    </>

  );
};

export default ProductDetail;
