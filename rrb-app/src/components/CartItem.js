import { useDispatch } from "react-redux";
import { deleteFromCart, addToCart } from "../actions/shoppingCartActions";
import { NumericStepper } from "./NumericStepper";
import "../styles/CartItem.css";
import delete_icon from "../assets/delete_icon.png";

function CartItem({ product }) {
  const { id, title, image, price, quantity } = product;
  const dispatch = useDispatch();

  const productsPrice = price * quantity;

  return (
    <article className="CartItem">
      <div
        className="CartItem__delete"
        onClick={() => dispatch(deleteFromCart(id, true))}
      >
        <img src={delete_icon} alt="delete" className="CartItem__icon"></img>
      </div>
      <h5 className="CartItem__text">{title}</h5>
      <img src={image} alt={title} className="CartItem__image"></img>
      <p className="CartItem__text">
        ${price} x {quantity} = ${productsPrice}
      </p>
      <NumericStepper
        initNumber={quantity}
        handleRightButton={() => dispatch(addToCart(id))}
        handleLeftButton={() => dispatch(deleteFromCart(id))}
      />
    </article>
  );
}

export { CartItem };
