import React, { useState } from "react";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import "./Shop.css";

const Shop = () => {
  //   console.log(fakeData);
  const firstTen = fakeData.slice(0, 10);
  //   console.log(firstTen);

  const [products, setProducts] = useState(firstTen);

  const [cart, setCart] = useState([]);

  // Event Handler
  const handleAddProduct = (product) => {
    // console.log("Product Added", product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((pd) => (
          <Product
            product={pd}
            key={pd.key}
            handleAddProduct={handleAddProduct}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart } />
      </div>
    </div>
  );
};

export default Shop;
