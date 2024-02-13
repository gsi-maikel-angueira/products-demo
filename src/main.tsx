import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import ProductEditPage from "./pages/ProductEditPage";
import NewProductPage from "./pages/NewProductPage";
import { Provider } from "react-redux";
import { store } from "./state/ProductStore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products/:productId/edit",
        element: <ProductEditPage />,
      },
      {
        path: "products/new",
        element: <NewProductPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
