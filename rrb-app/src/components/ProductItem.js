import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart, addToCart } from "../actions/shoppingCartActions";
import { NumericStepper } from "./NumericStepper";
import "../styles/ProductItem.css";

function ProductItem({ product }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { id, title, image, price } = product;
  const { cart } = state;

  const productInCart = cart.filter((item) => item.id === id);

  return (
    <article className="ProductItem">
      <img src={image} alt={title} className="ProductItem__image" />
      <p className="ProductItem__price">${price}</p>
      <NavLink to={`/product/${id}`} className="ProductItem__link">
        Ver
      </NavLink>
      <button
        onClick={() => dispatch(addToCart(id))}
        className={`Button ${
          productInCart[0]?.quantity ? "Button--disabled" : "Button--primary"
        }`}
        disabled={productInCart[0]?.quantity && true}
        type="button"
      >
        Agregar al carrito
      </button>

      {productInCart.length > 0 && (
        <>
          <NumericStepper
            initNumber={productInCart[0].quantity}
            handleRightButton={() => dispatch(addToCart(id))}
            handleLeftButton={() => dispatch(deleteFromCart(id))}
          />
        </>
      )}
    </article>
  );
}

export { ProductItem };
