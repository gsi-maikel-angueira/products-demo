import { useEffect, useState } from "react";
import { Product, fetchProducts } from "../services/ProductService";

export const ProductView = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // fetch products from mock API
    (async () => {
      const products = await fetchProducts();
      setProducts(products);
    })();
  }, []);

  return <div>ProductView {products.length}</div>;
};
