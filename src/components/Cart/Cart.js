import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  //   console.log(cart);

  //   const total = cart.reduce((total, prd) => total + prd.price, 0);

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price;
  }

  //   Shipping Cost Calculation
  let shippingCost = 0;
  if (total > 35) {
    shippingCost = 0;
  } else if (total > 15) {
    shippingCost = 4.99;
  } else if (total > 0) {
    shippingCost = 12.99;
  }

  //   Round Number
  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };

  //   Tax Calculation
  const tax = (total * 0.1).toFixed(2);

  const grandTotal = Math.round(total + shippingCost + Number(tax));
  return (
    <div>
      <h4>Order Summary</h4>
      <p>Items Order: {cart.length}</p>
      <p>Product Price: {total}</p>
      <p>
        <small>Shipping Cost: {shippingCost}</small>
      </p>
      <p>
        <small>Tax + Vat: {tax}</small>
      </p>
      <p>Total Price: {grandTotal}</p>
    </div>
  );
};

export default Cart;
