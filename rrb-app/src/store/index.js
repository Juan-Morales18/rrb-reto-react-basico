import { createStore } from "redux";
import { shoppingCartReducer } from "../reducers/shoppingCartReducer";

const store = createStore(shoppingCartReducer);
store.subscribe(() => console.log(store));

export { store };
