import { useState } from "react";
import { EmptyProduct, Product, addProduct } from "../services/ProductService";
import { ProductDetails } from "../components/ProductDetails";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

function NewProductPage() {
  const [newProduct, setNewProduct] = useState<Product>(EmptyProduct);
  const navigate = useNavigate();

  async function onSaveProduct(newProduct: Product) {
    const savedProduct = await addProduct(newProduct);
    setNewProduct({ ...savedProduct });
    message.success(`Product was created success: ${newProduct.name}`);
    navigate(`/products/${savedProduct.id}/edit`);
  }

  return (
    <ProductDetails
      selectedProduct={newProduct}
      onSaveProduct={onSaveProduct}
    />
  );
}

export default NewProductPage;
