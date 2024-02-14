import { Product } from "../../services/productApi";
import { ThunkDispatch } from "redux-thunk";

export type ProductState = {
  products: Product[];
};

interface FetchProductAction {
  type: "FETCH_PRODUCTS";
  payload: Product[];
}

interface DeleteProductAction {
  type: "DELETE_PRODUCT";
  payload: string;
}

interface UpdateProductAction {
  type: "UPDATE_PRODUCT";
  payload: Product;
}

interface AddProductAction {
  type: "ADD_PRODUCT";
  payload: Product;
}

export type ProductAction =
  | FetchProductAction
  | DeleteProductAction
  | UpdateProductAction
  | AddProductAction;

export type DispatchType = ThunkDispatch<ProductState, void, ProductAction>;
