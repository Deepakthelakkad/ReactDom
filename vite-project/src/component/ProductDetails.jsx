import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams(); // Get productId from the URL

  return (
    <div>
      <h1>Details for {productId}</h1>
      <p>This is the page for {productId}.</p>
    </div>
  );
};

export default ProductDetails;
