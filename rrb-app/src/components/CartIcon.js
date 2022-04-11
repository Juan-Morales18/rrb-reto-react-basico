import { useSelector } from "react-redux";
import "../styles/CartIcon.css";
import cart_icon from "../assets/shopping-cart-icon.png";

function CartIcon() {
  const state = useSelector((state) => state);
  const { cart } = state;

  const totalItemsInCart = cart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity;
  }, 0);

  return (
    <div className="CartIcon">
      <img src={cart_icon} alt="shoppin-cart" className="CartIcon__image"></img>
      {totalItemsInCart > 0 ? (
        <div className="CartIcon__bubble">{totalItemsInCart}</div>
      ) : null}
    </div>
  );
}

export { CartIcon };
