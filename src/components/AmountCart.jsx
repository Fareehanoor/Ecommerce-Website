/* eslint-disable react/prop-types */

import { FaMinus, FaPlus } from "react-icons/fa";
const AmountCart = ({ amount, decrement, increment }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button
          onClick={() => {
            decrement();
          }}
        >
          <FaMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button
          onClick={() => {
            increment();
          }}
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default AmountCart;
