import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EmptyProduct, Product, getProductById } from "../services/productApi";
import { ProductDetails } from "../components/ProductDetails";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { updateProductAsync } from "../redux/actions";

function ProductEditPage() {
  let params = useParams();
  const { productId } = params;
  const [editProduct, setEditProduct] = useState<Product>(EmptyProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const product = (await getProductById(productId!)) as Product;
      setEditProduct(product);
    })();
  }, []);

  function onSaveProduct(updatedProduct: Product): void {
    dispatch(updateProductAsync(updatedProduct));
    message.success(`Product was updated success: ${updatedProduct.name}`);
  }

  return (
    <ProductDetails
      selectedProduct={editProduct!}
      onSaveProduct={onSaveProduct}
    />
  );
}

export default ProductEditPage;
