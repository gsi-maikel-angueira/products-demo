import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  EmptyProduct,
  Product,
  getProductById,
} from "../services/ProductService";
import { ProductDetails } from "../components/ProductDetails";
import { message } from "antd";
import { useAppDispatch } from "../state/ProductStore";
import { updateProductAsync } from "../state/ProductSlice";

function ProductEditPage() {
  let params = useParams();
  const { productId } = params;
  const [editProduct, setEditProduct] = useState<Product>(EmptyProduct);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const product = (await getProductById(productId!)) as Product;
      setEditProduct(product);
    })();
  }, []);

  function onSaveProduct(p: Product): void {
    dispatch(updateProductAsync(p));
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
