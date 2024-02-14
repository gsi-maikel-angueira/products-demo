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
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: [...action.payload] };
    case ADD_PRODUCT:
      return { ...state, products: state.products.concat(action.payload) };
    case DELETE_PRODUCT:
      const deletedProducts: Product[] = state.products.filter(
        (p) => p.id !== action.payload
      );
      return { ...state, products: deletedProducts };
    case UPDATE_PRODUCT:
      const updatedProducts = state.products.map((p) => {
        if (p.id === action.payload.id) {
          return { ...action.payload };
        }
        return p;
      });
      return { ...state, products: updatedProducts };
    default:
      return state;
  }
};

export default productReducer;
