import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Text, Stack, Alert, AlertIcon } from "@chakra-ui/react";
import AddOrderForm from "../../../firebase/AddOrderForm";

const CheckoutModal = ({ isOpen, onClose, user, cart, total, handleClearCart }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="500px">
        <ModalHeader>Checkout</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {cart.length < 1 ? (
            <Stack>
              <Alert status="warning">
                <AlertIcon />
                Add something to the cart!
              </Alert>
            </Stack>
          ) : user ? (
            <AddOrderForm userEmail={user} cart={cart} total={total} clearCart={handleClearCart} />
          ) : (
            <Text>Please register or log in to proceed with the checkout.</Text>
          )}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="yellow" mr={3} onClick={onClose} size="sm">
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CheckoutModal;

