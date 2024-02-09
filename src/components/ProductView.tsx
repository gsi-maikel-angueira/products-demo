import { useEffect, useState } from "react";
import { Product, fetchProducts } from "../services/ProductService";
import { Col, Row, message } from "antd";
import { ProductList } from "./ProductList";
import { ProductDetails } from "./ProductDetails";

export const ProductView = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedId, setSelectedId] = useState(2);

  const selectedItem = products.find((p) => p.id === selectedId);

  useEffect(() => {
    (async () => {
      const products = await fetchProducts();
      setProducts(products);
    })();
  }, []);

  const onSelectedItem = (item: Product) => {
    setSelectedId(item.id);
  };

  const onProductDeleted = (item: Product) => {
    message.success(`Product was deleted sucess: ${item.name}`);
  };

  return (
    <>
      <Row>
        <Col span={12}>
          <h2>Product List</h2>
          <ProductList
            products={products}
            onSelectedItem={onSelectedItem}
            onProductDeleted={onProductDeleted}
          />
        </Col>
        <Col span={4}></Col>
        <Col span={8}>
          <h2>Product Details</h2>
          <ProductDetails selectedProduct={selectedItem} />
        </Col>
      </Row>
    </>
  );
};
