import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../actions/shoppingCartActions";
import { CartItem } from "./CartItem";
import "../styles/CartOrder.css";

function CartOrder() {
  const state = useSelector((state) => state);
  const { cart } = state;
  const dispatch = useDispatch();

  const totalToPay = cart.reduce(
    (accumulator, currentItem) =>
      accumulator + currentItem.price * currentItem.quantity,
    0
  );

  return (
    <div className="CartOrder">
      {cart.map((item) => (
        <CartItem key={`Cart-item-${item.id}`} product={item} />
      ))}
      {cart.length > 0 ? (
        <>
          <p className="CartOrder__text CartOrder__text--total-price">
            Total a pagar: ${totalToPay}
          </p>
          <button
            className="CartOrder__button CartOrder__button--clear"
            onClick={() => dispatch(clearCart())}
          >
            Vaciar carrito
          </button>
          <button className="CartOrder__button CartOrder__button--to-pay ">
            Pagar
          </button>
        </>
      ) : (
        <p className="CartOrder__text">Tu carrito esta vacío</p>
      )}
    </div>
  );
}

export { CartOrder };
