import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../actions/shoppingCartActions";
import { NumericStepper } from "./NumericStepper";
import "../styles/ProductDetails.css";

function ProductDetails({ product }) {
  const { id, title, image, description, price } = product[0];
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { cart } = state;

  const productInCart = cart.filter((item) => item.id === id);

  return (
    <article className="ProductDetails">
      <img src={image} alt={title} className="ProductDetails__image" />
      <h4 className="ProductDetails__title">{title}</h4>
      <p className="ProductDetails__description">{description}</p>
      <span className="ProductDetails__price">$ {price}</span>
      <button
        type="button"
        onClick={() => dispatch(addToCart(id))}
        className={`Button ${
          productInCart[0]?.quantity ? "Button--disabled" : "Button--primary"
        }`}
        disabled={productInCart[0]?.quantity && true}
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

export { ProductDetails };
