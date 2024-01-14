import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';


const useUserData = (email) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (email) { 
      const fetchUserData = async () => {
        try {
          const userDocRef = doc(db, 'users', email);
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            const userDataFromFirestore = userDocSnap.data();
            setUserData(userDataFromFirestore);
          }
        } catch (err) {
          console.error('Error fetching user data:', err);
        }
      };

      fetchUserData();
    }
  }, [email]);

  return userData;
};

export default useUserData;
