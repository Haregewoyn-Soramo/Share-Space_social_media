
import React from "react";

const ProductsList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <b>{product.title}</b>
          <p>{product.category}</p> 
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
