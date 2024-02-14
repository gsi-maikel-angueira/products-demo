import { combineReducers } from "redux";
import { ProductState } from "../action-types";
import productReducer from "./productReducer";

export interface AppState {
  products: ProductState;
}

const rootReducer = combineReducers<AppState>({
  products: productReducer,
});

export default rootReducer;
