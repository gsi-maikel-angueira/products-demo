import { Product } from "../../services/productApi";
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  FETCH_PRODUCTS,
} from "../action-types/actionNames";
import { ProductAction, ProductState } from "../action-types";

export const initialState: ProductState = {
  products: [],
};

const productReducer = (
  state: ProductState = initialState,
  action: ProductAction
) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PRODUCTS:
      return { ...state, products: [...payload] };
    case ADD_PRODUCT:
      return { ...state, products: state.products.concat(payload) };
    case DELETE_PRODUCT:
      const deletedProducts: Product[] = state.products.filter(
        (p) => p.id !== payload
      );
      return { ...state, products: deletedProducts };
    case UPDATE_PRODUCT:
      const updatedProducts = state.products.map((p) => {
        if (p.id === payload.id) {
          return { ...payload };
        }
        return p;
      });
      return { ...state, products: updatedProducts };
    default:
      return state;
  }
};

export default productReducer;
