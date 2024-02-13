import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Product,
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../services/ProductService";

interface ProductListState {
  products: Product[];
}

const initialState: ProductListState = {
  products: await getProducts(),
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addNewProduct: (state, action: PayloadAction<Product>) => {
      state.products.push({ ...action.payload });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsAsync.fulfilled, (state, action) => {
      state.products = [...action.payload];
    });
    builder.addCase(deleteProductAsync.fulfilled, (state, action) => {
      const products = state.products.filter(
        (p) => p.id !== action.payload.productId
      );
      state.products = [...products];
    });
    builder.addCase(updateProductAsync.fulfilled, (state, action) => {
      const products = state.products.map((p) => {
        if (p.id === action.payload.id) {
          return { ...action.payload };
        }
        return p;
      });
      state.products = [...products];
    });
    builder.addCase(addProductAsync.fulfilled, (state, action) => {
      state.products.push({ ...action.payload });
    });
  },
});

export const getProductsAsync = createAsyncThunk(
  "products/getProductsAsync",
  async () => {
    const products = await getProducts();
    return [...products];
  }
);

export const deleteProductAsync = createAsyncThunk(
  "products/deleteProductAsync",
  async (productId: string) => {
    await deleteProduct(productId);
    return { productId };
  }
);

export const updateProductAsync = createAsyncThunk(
  "products/updateProductAsync",
  async (product: Product) => {
    const updatedProduct = await updateProduct(product.id, product);
    return { ...updatedProduct };
  }
);

export const addProductAsync = createAsyncThunk(
  "products/addProductAsync",
  async (product: Product) => {
    const newProduct = await addProduct(product);
    return { ...newProduct };
  }
);

export default productSlice.reducer;
export const { addNewProduct } = productSlice.actions;
