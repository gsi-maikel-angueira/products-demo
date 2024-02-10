import React, { useEffect, useState } from "react";
import { Product, getProducts } from "../services/ProductService";
import { ProductList } from "../components/ProductList";
import { message } from "antd";

function ProductListPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const products = await getProducts();
      setProducts(products);
    })();
  }, []);

  const onProductDeleted = (productId: string) => {
    setProducts((products) => {
      return products.filter((p) => p.id !== productId);
    });
    message.success(`Product was deleted success: ${productId}`);
  };

  return (
    <ProductList products={products} onProductDeleted={onProductDeleted} />
  );
}

export default ProductListPage;
