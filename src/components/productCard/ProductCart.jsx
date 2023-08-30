import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../features/cartSlice';
import { Button, Box, Flex, Image, Text, Stack } from '@chakra-ui/react';

const ProductCart = ({ item }) => {
  const cart = useSelector((state) => state.cart.value);

  const dispatch = useDispatch();

  const isExist = cart.some((i) => i.name === item.name);

  return (
    <Box
      className='product-cart'
      display='flex'
      flexDirection='column'
      alignItems='center'
      p='0' 
      borderRadius='1rem'
      boxShadow='md'
      transition='box-shadow 0.3s, transform 0.3s'
      bg='white'
      cursor='pointer'
      _hover={{
        boxShadow: 'lg',
        transform: 'scale(1.02)',
      }}
      height='100%'
      overflow='hidden'
    >
      <Image src={item.image} alt={item.name} maxH='150px' objectFit='cover' alignSelf='center' />

      <Stack
        as={Flex} 
        direction='column'
        flex='1'
        justifyContent='space-between'
        className='product-cart-content' 
        w='100%'
      >
        <Stack spacing='1rem' p='1rem'> 
          <Text fontSize='lg' fontWeight='semibold' textAlign='center'>
            {item.name}
          </Text>
          <Text color='gray.600' textAlign='center'>

            {item.description}
   
          </Text>
        </Stack>

        <Stack direction='row' justifyContent='space-between' alignItems='center' p='1rem' > 
          <Text fontSize='lg' fontWeight='bold'>
            $ {item.price}
          </Text>
          <Button
            colorScheme={isExist ? 'red' : 'orange'}
            variant='outline'
            size='sm'
            onClick={() => dispatch(addToCart(item))}
          >
            {isExist ? 'Remove' : 'Add'}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProductCart;






