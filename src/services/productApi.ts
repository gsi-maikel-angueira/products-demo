import axios from "axios";

export type Product = {
  id: string;
  name: string;
  price: number;
  unit: string;
};

export const UUID = () => Math.random().toString(36).substring(2, 9);

const PRODUCT_KEY = "PRODUCTS";

type ProductResponse = {
  products: Product[];
};

// fetch products list from mock API
async function initializeProducts() {
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
}

export function saveProducts(products: Product[]): void {
  return localStorage.setItem(PRODUCT_KEY, JSON.stringify(products));
}

export async function fetchProducts() {
  const json = localStorage.getItem(PRODUCT_KEY);
  if (!json) {
    const products = await initializeProducts();
    saveProducts(products);
    return products;
  }
  return JSON.parse(json) as Product[];
}

export async function getProductById(productId: string) {
  let products = await fetchProducts();
  return products.find((p) => p.id == productId);
}

export async function addProduct(addProduct: Product) {
  const products = await fetchProducts();
  const newProduct = { ...addProduct };
  const newProducts = [...products, newProduct];
  saveProducts(newProducts);
  return newProduct;
}

export async function updateProduct(
  productId: string,
  updatedProduct: Product
) {
  const products = await fetchProducts();
  const newProducts = products.map((p) => {
    if (p.id == productId) {
      return { ...updatedProduct, id: productId };
    }

    return p;
  });
  saveProducts(newProducts);
  return { ...updatedProduct, id: productId };
}

export async function deleteProduct(productId: string) {
  const products = await fetchProducts();
  let newProducts = products.filter((p) => p.id !== productId);
  saveProducts(newProducts);
  return newProducts;
}

export function resetProducts(): void {
  localStorage.removeItem(PRODUCT_KEY);
  initializeProducts();
}

export const EmptyProduct: Product = {
  id: UUID(),
  name: "",
  unit: "",
  price: 0.0,
};
