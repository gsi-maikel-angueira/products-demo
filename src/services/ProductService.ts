import axios from "axios";

export type Product = {
  id: number;
  name: string;
  price: number;
  unit?: string;
};

type ProductResponse = {
  products: Product[];
};

// fetch products list from mock API
export const fetchProducts = async () => {
  try {
    const res = await axios.get("/json/products.json");
    const data = res.data as ProductResponse;
    if (data == null || data.products == null)
      throw new Error("missing product info");
    return data.products;
  } catch (err) {
    if (err instanceof Error)
      throw new Error("Error in fetching products: " + err.message);
    return [];
  }
};
