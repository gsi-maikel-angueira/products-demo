import React from "react";
import { Product } from "../services/ProductService";

type ProductSelected = {
  selectedProduct?: Product;
};

export const ProductDetails = (props: ProductSelected) => {
  const { selectedProduct } = props;
  return <div>{selectedProduct?.name}</div>;
};
