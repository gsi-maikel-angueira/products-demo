import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const RootLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={[
            { key: 1, label: "Home" },
            { key: 2, label: "Products" },
            { key: 3, label: "About us" },
          ]}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default RootLayout;
