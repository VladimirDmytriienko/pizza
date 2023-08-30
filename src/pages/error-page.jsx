import { Box, Text, Button } from "@chakra-ui/react";
import { useRouteError, Link, useNavigate } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate()
  
    return (
      <Box id="error-page" textAlign="center" p="4">
        <Text fontSize="2xl" fontWeight="bold" mb="4">
          Oops!
        </Text>
        <Text fontSize="lg" mb="2">
          Sorry, an unexpected error has occurred.
        </Text>
        <Text fontSize="md" color="gray.600">
          <i>{error.statusText || error.message}</i>
        </Text>
        <Button colorScheme='whiteAlpha' m="4"  onClick={()=> navigate(-1)}>  
            Back to previous ↩
        </Button>
        <Link to='/'>
          <Button colorScheme='whiteAlpha' m="4">  
            Back to main 🏠
          </Button>
        </Link>

      </Box>
    );
};