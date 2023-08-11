import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase';
import { setCurrentUser, clearCurrentUser } from '../features/userSlice';
import useUserData from './useUserData';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Input,
  FormControl,
  FormLabel,
  Stack,
  ModalCloseButton 
} from '@chakra-ui/react';

export const Auth = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignIn, setIsSignIn] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      dispatch(setCurrentUser(user?.email || null));
    });

    return () => unsubscribe();
  }, [dispatch]);

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      handleCloseModal();
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignIn) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const userDocRef = doc(db, 'users', userCredential.user.email);
          await setDoc(userDocRef, {
            orders: [],
          });
          handleCloseModal();
        } catch (err) {
          if (err.code === 'auth/email-already-in-use') {
            setError('This email is already in use.');
          } else {
            setError('An error occurred. Please try again later.');
          }
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleMode = () => {
    setIsSignIn(!isSignIn);
    setError(null);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      dispatch(clearCurrentUser());
    } catch (err) {
      console.error(err);
    }
  };

  const userData = useUserData(user?.email);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setError(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setError(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.email}!</p>
          <Button onClick={handleLogout} colorScheme="red">
            Logout
          </Button>
          {/* {userData && (
            <div>
              <p>User Data:</p>
              <pre>{JSON.stringify(userData, null, 2)}</pre>
            </div>
          )}
          <AddOrderForm userEmail={user.email}/> */}
        </div>
      ) : (
        <div>
          <Button onClick={handleOpenModal} colorScheme="yellow">
            {isSignIn ? 'Login' : 'Sign Up'}
          </Button>
          <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{isSignIn ? 'Login' : 'Sign Up'}</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Password</FormLabel>
                      <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </FormControl>
                    <Button type="submit" colorScheme="blue">
                      {isSignIn ? 'Log In' : 'Sign Up'}
                    </Button>
                    <Button onClick={handleGoogleSignIn} colorScheme="blue">
                      Sign In with Google
                    </Button>
                    <Button onClick={handleToggleMode} colorScheme="gray">
                      {isSignIn ? 'Switch to Sign Up' : 'Switch to Login'}
                    </Button>
                  </Stack>
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
              </ModalBody>
              <ModalFooter>
                <Button onClick={handleCloseModal} colorScheme="gray">
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      )}
    </div>
  );
};
