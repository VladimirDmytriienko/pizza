import { useState } from 'react';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { auth, db } from './firebase';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  NumberInput,
  NumberInputField,

} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const AddOrderForm = ({ userEmail, cart, total, clearCart }) => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [comments, setComments] = useState('');

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    const order = cart.map(i=>( {"name": i.name, "quantity": i.quantity}) )
    try {
      const userDocRef = doc(db, 'users', userEmail);
      await updateDoc(userDocRef, {
        orders: arrayUnion({
          id: Date.now(),
          name,
          phoneNumber,
          address,
          paymentMethod,
          deliveryTime,
          comments,
          order,
          total
        }),
      });
      setName('');
      setPhoneNumber('');
      setAddress('');
      setPaymentMethod('');
      setDeliveryTime('');
      setComments('');

      clearCart();
      alert('Order added successfully!');
      
    } catch (error) {
      console.error('Error adding order:', error);
    } finally {
      navigate('/orders')
    }
  };

  return (
    <form onSubmit={handleOrderSubmit}>
      <FormControl mb="3">
        <FormLabel>Name</FormLabel>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </FormControl>

      <FormControl mb="3" size="sm">
        <FormLabel>Phone Number</FormLabel>
        <NumberInput value={phoneNumber} onChange={(value) => setPhoneNumber(value)}>
          <NumberInputField type="tel" pattern="[0-9]*" />
        </NumberInput>
      </FormControl>

      <FormControl mb="3" >
        <FormLabel>Address</FormLabel>
        <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </FormControl>

      <FormControl mb="3" >
        <FormLabel>Payment Method</FormLabel>
        <Select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="cash">Cash on Delivery</option>
          <option value="online">Online Payment</option>
        </Select>
      </FormControl>

      <FormControl mb="3">
        <FormLabel>Delivery Time</FormLabel>
        <Input
          type="time"
          value={deliveryTime}
          onChange={(e) => setDeliveryTime(e.target.value)}
        />
      </FormControl>

      <FormControl mb="3">
        <FormLabel>Comments</FormLabel>
        <Textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
      </FormControl>

      <Button type="submit" colorScheme="blue" size="sm">
        Add Order
      </Button>
    </form>
  );
};

export default AddOrderForm;
