import { useState } from 'react';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { auth, db } from './firebase';

const AddOrderForm = ({ userEmail }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const userDocRef = doc(db, 'users', userEmail);
      await updateDoc(userDocRef, {
        orders: arrayUnion({ id: Date.now(), title, amount }),
      });
  
      // Очистить форму после добавления заказа
      setTitle('');
      setAmount(0);
  
      alert('Order added successfully!');
    } catch (error) {
      console.error('Error adding order:', error);
    }
  };
  

  return (
    <form onSubmit={handleOrderSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
      />
      <button type="submit">Add Order</button>
    </form>
  );
};

export default AddOrderForm;
