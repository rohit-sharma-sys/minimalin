import React, { useState, useEffect } from "react";

function CatComponent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/category-list')
    .then(res => res.json())
    .then(data => {
        setProducts(data)
        })
  }, []);

  return (
    <>   
      <h1 className="cat-main-section">Categories</h1>
      <div className="cat-main">
        {products.slice(4, 8).map((product, index) => (
            <div className="product-cat" key={index}>{product.replace(/-/g, ' ')}</div>  
        ))}
      </div>
    </>
  );
}

export default CatComponent;
