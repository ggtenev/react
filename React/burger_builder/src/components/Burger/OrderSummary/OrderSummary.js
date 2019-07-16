import React from 'react';

const OrderSummary = (props) => {
  const orderSummary = Object.keys(props.ingredients) 
    .map(igKey => {
      return <li key = {igKey}>
            {igKey}:<span style={{textTransform:'capitalize'}}>{props.ingredients[igKey]}</span>
            </li>
    })
  return (
    <div>
      <h3>Your Order</h3>
      <p>Delicious Burger with:</p>
      <ul>
        {orderSummary}
      </ul>
      <p>Continue to Checkout</p>
      <button>CANCEL</button>
      <button>CONTINUE</button>
    </div>
  );
};

export default OrderSummary;