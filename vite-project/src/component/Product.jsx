import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div>
      <h1>Products List</h1>
      <ul>
        <li><Link to="/product/product1">Product 1</Link></li>
        <li><Link to="/product/product2">Product 2</Link></li>
        <li><Link to="/product/product3">Product 3</Link></li>
      </ul>
    </div>
  );
};

export default Product;
