import { Product, EmptyProduct } from "../services/ProductService";
import { ProductDetails } from "../components/ProductDetails";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../state/ProductStore";
import { addProductAsync } from "../state/ProductSlice";

function NewProductPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const newProduct = { ...EmptyProduct };

  async function onSaveProduct(newProduct: Product) {
    dispatch(addProductAsync(newProduct));
    message.success(`Product was created success: ${newProduct.name}`);
    navigate(`/products/${newProduct.id}/edit`);
  }

  return (
    <ProductDetails
      selectedProduct={newProduct}
      onSaveProduct={onSaveProduct}
    />
  );
}

export default NewProductPage;
