import { EmptyProduct, Product } from "../services/productApi";
import { ProductDetails } from "../components/ProductDetails";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductAsync } from "../redux/actions";

function NewProductPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const newProduct = EmptyProduct;

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
