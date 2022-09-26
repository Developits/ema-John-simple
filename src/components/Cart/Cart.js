import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h1>This is for cards</h1>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: $</p>
      <p>Total Shipping Charge: $</p>
      <p>Tex: $</p>
      <h2>Grand Total: $</h2>
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
