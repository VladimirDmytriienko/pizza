import Layout from "../layouts/Layout";
import ProductList from '../components/productList/ProductList'
import CartItems from '../components/cartItems/CartItems'
import UserOrders from '../components/userOrders/UserOrders'
import ErrorPage from "../pages/error-page";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <ProductList/>,
      },
      {
        path: "cart",
        element: <CartItems />
      },
      {
        path: "orders",
        element: <UserOrders />
      }
    ]
  }
];

