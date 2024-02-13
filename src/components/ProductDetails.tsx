import { useEffect } from "react";
import { Product } from "../services/productApi";
import { Button, Form, Input, InputNumber, Space } from "antd";

type ProductDetailProps = {
  selectedProduct: Product;
  onSaveProduct: (p: Product) => void;
};

const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 6 },
};

const tailLayout = {
  wrapperCol: { offset: 3, span: 16 },
};

export const ProductDetails = (props: ProductDetailProps) => {
  const { selectedProduct, onSaveProduct } = props;
  const [form] = Form.useForm();

  const onFinish = (savedProduct: Product) => {
    console.log(savedProduct);
    onSaveProduct({ ...savedProduct, id: selectedProduct.id });
  };

  const onReset = () => {
    form.setFieldsValue({ ...selectedProduct });
  };

  useEffect(() => {
    const currentProduct = { ...selectedProduct };
    form.setFieldsValue(currentProduct);
  }, [selectedProduct]);
  return (
    <>
      <Form name="product" {...layout} form={form} onFinish={onFinish}>
        <Form.Item<Product>
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input name" }]}
        >
          <Input placeholder="Enter name..." />
        </Form.Item>
        <Form.Item<Product>
          label="Unit"
          name="unit"
          rules={[{ required: true, message: "Please input unit" }]}
        >
          <Input placeholder="Enter unit..." />
        </Form.Item>
        <Form.Item<Product>
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please input price" }]}
        >
          <InputNumber placeholder="Enter price..." />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
            <Button htmlType="button" onClick={() => onReset()}>
              Reset
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};
