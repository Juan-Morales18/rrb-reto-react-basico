import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ProductDetails } from "../components/ProductDetails";
import { NotFound } from "./NotFound";


function Details() {
  const { id } = useParams();
  const state = useSelector((state) => state);
  const products = state.products;

  const selectedProduct = products.products.filter(
    (product) => product.id === Number(id)
  );

  if (selectedProduct.length === 0) {
    return <NotFound />;
  }
  return <ProductDetails product={selectedProduct} />;
}

export { Details };
