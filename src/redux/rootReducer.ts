import { combineReducers } from "redux";
import { ProductState } from "./action-types";
import productReducer from "./reducers";

export interface AppState {
  products: ProductState;
}

const rootReducer = combineReducers<AppState>({
  products: productReducer,
});

export default rootReducer;
