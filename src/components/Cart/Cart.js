import React from "react";
import "./Cart.css";
const Cart = (props) => {

  const {cart} = props;

  let total = 0;
  let shipping =0;

  for(const product of cart){
     total = total + product.price;
     shipping = shipping + product.shipping;
  }
  const tex = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = + total + shipping + tex;

  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${shipping}</p>
      <p>Tex: ${tex}</p>
      <h4>Grand Total: ${grandTotal}</h4>
      <button>
        <p>Clear Cart</p>
      </button>
      <button>
        <p>Review Order</p>
      </button>
    </div>
  );
};

export default Cart;
