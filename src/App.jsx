import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import CartItems from './components/cartItems/CartItems';
import ProductList from './components/productList/ProductList';
import UserOrders from "./components/userOrders/UserOrders"

import Layout from './layouts/Layout';
import { ChakraProvider, Container, extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#747bff',
      },
    },
  },
});

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <ProductList />,
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
  ])

  return (
    <ChakraProvider theme={theme}>
      <Container maxW='container.xl'   minH="100vh">
        <RouterProvider router={router} />
      </Container>

      {/* <div className='temporaly-grid'>
        </div> */}
    </ChakraProvider>
  )
}

export default App


