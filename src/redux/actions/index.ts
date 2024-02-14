import {
  Product,
  addProduct,
  deleteProduct,
  fetchProducts,
  updateProduct,
} from "../../services/productApi";
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  FETCH_PRODUCTS,
} from "../action-types/actionNames";
import { DispatchType, ProductAction } from "../action-types";

export function fetchProductsAsync() {
  return async (dispatch: DispatchType) => {
    const products = await fetchProducts();
    const fetchProductsAction: ProductAction = {
      type: FETCH_PRODUCTS,
      payload: [...products],
    };
    dispatch({ ...fetchProductsAction });
  };
}

export function addProductAsync(product: Product) {
  return async (dispatch: DispatchType) => {
    const newProduct = await addProduct(product);
    const addProductAction: ProductAction = {
      type: ADD_PRODUCT,
      payload: { ...newProduct },
    };
    dispatch({ ...addProductAction });
  };
}

export function deleteProductAsync(productId: string) {
  return async (dispatch: DispatchType) => {
    await deleteProduct(productId);
    const deleteProductAction: ProductAction = {
      type: DELETE_PRODUCT,
      payload: productId,
    };
    dispatch({ ...deleteProductAction });
  };
}

export function updateProductAsync(product: Product) {
  return async (dispatch: DispatchType) => {
    const updatedProduct = await updateProduct(product.id, product);
    const updateProductAction: ProductAction = {
      type: UPDATE_PRODUCT,
      payload: { ...updatedProduct },
    };
    dispatch({ ...updateProductAction });
  };
}
