import { useState } from "react";
import {
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import CartProduct from "./cartPrroduct/CartProduct";

import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../features/cartSlice";
import CheckoutModal from "./checkoutModal/CheckoutModal";

const CartItems = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
  const user = useSelector((state) => state.user.currentUser);

  const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2);

  const handleOpenModal = () => {

    if (user) {
      setIsModalOpen(true);
    } else {
      alert("Please register or log in to proceed with the checkout.");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Box p="4">
      <Text fontSize="xl" fontWeight="bold" mb="4">
        Cart Items
      </Text>
      {cart.map((i) => (
        <CartProduct key={i.name} item={i} />
      ))}

      <Text fontSize="lg" fontWeight="bold" mt="4">
        Subtotal: ${total}
      </Text>

      <Button onClick={handleOpenModal} colorScheme="yellow">
        Checkout
      </Button>
      
      <CheckoutModal isOpen={isModalOpen} onClose={handleCloseModal} user={user} cart={cart} total={total} handleClearCart={handleClearCart}/>

    </Box>
  );
};

export default CartItems;

