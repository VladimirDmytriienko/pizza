import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';
import useUserData from './useUserData';

const UserProfile = ({ userEmail }) => {
  

  const userData = useUserData(userEmail);

  return (
    <div>
      {userData && (
        <div>
          <p>User: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <h2>Orders:</h2>
          {userData.orders && userData.orders.length > 0 ? (
            <ul>
              {userData.orders.map((order) => (
                <li key={order.id}>
                  <p>Title: {order.title}</p>
                  <p>Amount: {order.amount}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No orders found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UserProfile;

