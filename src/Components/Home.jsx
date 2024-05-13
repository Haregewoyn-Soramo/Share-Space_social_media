
import React from "react";
import ProductsList from "./ProductsList";
import UseFetch from "./UseFetch";

const Home = () => {
  const { data: products, isLoading, errorMessage } = UseFetch('http://localhost:3000/products');

  return (
    <div>
      {errorMessage && <div>{errorMessage}</div>}
      {isLoading && <div>Loading ...</div>}
      {products && <ProductsList products={products} />}
    </div>
  );
};

export default Home;
