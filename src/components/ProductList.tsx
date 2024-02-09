import React from "react";
import { Product } from "../services/ProductService";
import { Button, Popconfirm, Space, Table, TableProps } from "antd";
import { DeleteFilled, DeleteOutlined, EditOutlined } from "@ant-design/icons";

type ProductListProps = {
  products: Product[];
  onSelectedItem: (item: Product) => void;
  onProductDeleted: (item: Product) => void;
};

export const ProductList = (props: ProductListProps) => {
  const { products, onSelectedItem, onProductDeleted } = props;

  const columns: TableProps<Product>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Unit",
      dataIndex: "unit",
      key: "unit",
    },
    {
      title: "Action",
      key: "action",
      render: (_, product) => {
        return (
          <Space size="middle">
            <EditOutlined onClick={() => onSelectedItem(product)} />

            <Popconfirm
              title="Delete the product"
              description="Are you sure to delete this product?"
              onConfirm={() => onProductDeleted(product)}
              okText="Yes"
              cancelText="No"
            >
              <Button
                type="primary"
                icon={<DeleteOutlined />}
                size="small"
                danger
              />
            </Popconfirm>
          </Space>
        );
      },
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={products} />
    </>
  );
};
