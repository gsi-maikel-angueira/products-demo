import { useEffect } from "react";
import { ProductList } from "../components/ProductList";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductAsync, fetchProductsAsync } from "../redux/actions";
import { AppState } from "../redux/rootReducer";

function HomePage() {
  const dispatch = useDispatch();
  const { products } = useSelector((state: AppState) => state.products);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, []);

  const onProductDeleted = async (productId: string) => {
    dispatch(deleteProductAsync(productId));
    message.success(`Product was deleted success: ${productId}`);
  };

  return (
    <ProductList products={products} onProductDeleted={onProductDeleted} />
  );
}

export default HomePage;
