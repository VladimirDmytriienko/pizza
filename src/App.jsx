import { ChakraProvider, Container } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter  } from 'react-router-dom';
import {theme} from './config/theme'
import { routes } from './config/routes';


function App() {

  const router = createBrowserRouter(routes)

  return (
    <ChakraProvider theme={theme}>
      <Container maxW='container.xl'   minH="100vh">
        <RouterProvider router={router} />
      </Container>


    </ChakraProvider>
  )
}

export default App


