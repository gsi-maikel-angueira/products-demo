import { ProductList } from "../components/ProductList";
import { message } from "antd";
import { useAppDispatch, useAppSelector } from "../state/ProductStore";
import { deleteProductAsync } from "../state/ProductSlice";

function HomePage() {
  const fetchProducts = useAppSelector((state) => state.productsState.products);
  const dispatch = useAppDispatch();

  const onProductDeleted = async (productId: string) => {
    dispatch(deleteProductAsync(productId));
    message.success(`Product was deleted success: ${productId}`);
  };

  return (
    <ProductList products={fetchProducts} onProductDeleted={onProductDeleted} />
  );
}

export default HomePage;
