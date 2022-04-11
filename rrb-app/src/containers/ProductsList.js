import { useSelector } from "react-redux";
import { ProductItem } from "../components/ProductItem";
import "../styles/ProductsList.css";

function ProductsList() {
  const state = useSelector((state) => state);
  const { products } = state;

  return (
    <div className="ProductsList">
      {products.products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export { ProductsList };
