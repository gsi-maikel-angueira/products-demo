import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EmptyProduct, Product, addProduct } from "../services/ProductService";
import { ProductDetails } from "../components/ProductDetails";
import { message } from "antd";

function NewProductPage() {
  const [newProduct, setNewProduct] = useState<Product>(EmptyProduct);

  function onSaveProduct(newProduct: Product): void {
    addProduct(newProduct);
    setNewProduct({ ...newProduct });
    message.success(`Product was created success: ${newProduct.name}`);
  }

  return (
    <ProductDetails
      selectedProduct={newProduct}
      onSaveProduct={onSaveProduct}
    />
  );
}

export default NewProductPage;
