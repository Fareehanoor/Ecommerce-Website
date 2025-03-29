/* eslint-disable react/prop-types */
import { FaTrash } from "react-icons/fa";
import FormatPrice from "../helpers/FormatPrice";
import AmountCart from "./AmountCart";
import { useCartContext } from "../context/cart/cartContext";

const CartItem = ({ id, name, amount, color, price, image }) => {
  const { handleRemoveItem, setIncrement, setDecrement } = useCartContext();

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      {/* Quantity  */}
      <AmountCart
        amount={amount}
        decrement={() => setDecrement(id)}
        increment={() => setIncrement(id)}
      />

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => handleRemoveItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
