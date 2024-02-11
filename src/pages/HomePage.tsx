import { useEffect, useState } from "react";
import {
  Product,
  deleteProduct,
  getProducts,
} from "../services/ProductService";
import { ProductList } from "../components/ProductList";
import { message } from "antd";

function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const products = await getProducts();
      setProducts(products);
    })();
  }, []);

  const onProductDeleted = async (productId: string) => {
    const items = await deleteProduct(productId);
    setProducts([...items]);
    message.success(`Product was deleted success: ${productId}`);
  };

  return (
    <ProductList products={products} onProductDeleted={onProductDeleted} />
  );
}

export default HomePage;
