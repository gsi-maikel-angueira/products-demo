import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  EmptyProduct,
  Product,
  getProductById,
  updateProduct,
} from "../services/ProductService";
import { ProductDetails } from "../components/ProductDetails";
import { message } from "antd";

function ProductEditPage() {
  let useParam = useParams();
  const productId = useParam["id"] as string;
  const [editProduct, setEditProduct] = useState<Product>(EmptyProduct);

  useEffect(() => {
    (async () => {
      const product = (await getProductById(productId)) as Product;
      setEditProduct(product);
    })();
  }, []);

  function onSaveProduct(p: Product): void {
    updateProduct(editProduct!.id, p);
    message.success(`Product was updated success: ${p.name}`);
  }

  return (
    <ProductDetails
      selectedProduct={editProduct!}
      onSaveProduct={onSaveProduct}
    />
  );
}

export default ProductEditPage;
