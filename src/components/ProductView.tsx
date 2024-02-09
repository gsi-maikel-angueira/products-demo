import { useEffect, useState } from "react";
import { Product, fetchProducts } from "../services/ProductService";
import { Button, Col, Row, message } from "antd";
import { ProductList } from "./ProductList";
import { ProductDetails } from "./ProductDetails";
import { PlusCircleOutlined } from "@ant-design/icons";

const defaultProduct: Product = {
  id: 0,
  name: "",
  unit: "",
  price: 0.0,
};

export const ProductView = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedItem, setSelectedItem] = useState<Product>(defaultProduct);

  useEffect(() => {
    (async () => {
      const products = await fetchProducts();
      setProducts(products);
    })();
  }, []);

  const onSelectedItem = (item: Product) => {
    setSelectedItem(item);
  };

  const onProductDeleted = (productId: number) => {
    setProducts((products) => {
      return products.filter((p) => p.id !== productId);
    });
    message.success(`Product was deleted success: ${productId}`);
  };

  const onSaveProduct = (item: Product) => {
    const isNew = item.id === 0;
    if (isNew) {
      const lastId = Math.max(...products.map((p) => p.id), 0);
      setProducts((products) => [...products, { ...item, id: lastId + 1 }]);
    } else {
      setProducts((products) => {
        return products.map((p) => {
          if (p.id === item.id) {
            return { ...item };
          }
          return p;
        });
      });
    }
    newProduct();
    message.success(`Product was saved success: ${item.name}`);
  };

  const newProduct = () => {
    setSelectedItem(defaultProduct);
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
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            size="large"
            onClick={() => newProduct()}
          >
            New Product
          </Button>
        </Col>
        <Col span={4}></Col>
        <Col span={8}>
          <h2>Product Details</h2>
          <ProductDetails
            selectedProduct={selectedItem}
            onSaveProduct={onSaveProduct}
          />
        </Col>
      </Row>
    </>
  );
};
