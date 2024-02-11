import { Product } from "../services/ProductService";
import { Button, Popconfirm, Space, Table, TableProps } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

type ProductListProps = {
  products: Product[];
  onProductDeleted: (item: string) => void;
};

export const ProductList = (props: ProductListProps) => {
  const { products, onProductDeleted } = props;

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
            <Link to={`products/${product.id}/edit`}>
              <EditOutlined />
            </Link>

            <Popconfirm
              title="Delete the product"
              description="Are you sure to delete this product?"
              onConfirm={() => onProductDeleted(product.id)}
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
  return <Table columns={columns} dataSource={products} rowKey={(p) => p.id} />;
};
