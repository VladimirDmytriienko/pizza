import './CartProduct.css'
import { increaseQuantity, decreaseQuantity, addToCart } from '../../../features/cartSlice'
import { useDispatch } from 'react-redux'
import { Box, Image, Button, Flex, Text } from '@chakra-ui/react';
import { BsTrashFill } from 'react-icons/bs';

const CartProduct = ({ item }) => {
  const dispatch = useDispatch();

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      dispatch(decreaseQuantity(item));
    }
  };

  return (
    <Box p="4" mt="4" bg="white" borderRadius="md" boxShadow="base">
      <Flex align="center" justify="space-between">
        <Image src={item.image} alt={item.name} maxW="80px" maxH="80px" objectFit="cover" />
        <Box flex="1" ml="4">
          <Text fontSize="lg" fontWeight="bold">
            {item.name}
          </Text>
          <Text color="gray.600">{item.description}</Text>
          <Flex align="center" justify="space-between">
            <Text fontWeight="bold">${item.price}</Text>
            <Flex align="center">
              <Button size="sm" onClick={() => dispatch(increaseQuantity(item))}>
                +
              </Button>
              <Text mx="2">{item.quantity}</Text>
              <Button
                size="sm"
                onClick={handleDecreaseQuantity}
                disabled={item.quantity === 1}
              >
                -
              </Button>
            </Flex>
          </Flex>
        </Box>
        <Box
          as={BsTrashFill}
          color="red.500"
          cursor="pointer"
          onClick={() => dispatch(addToCart(item))}
        />
      </Flex>
    </Box>
  );
};

export default CartProduct;