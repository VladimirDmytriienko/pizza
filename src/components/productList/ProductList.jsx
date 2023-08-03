import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuData } from '../../features/menuSlice'; 

const ProductList = () => {
  const dispatch = useDispatch();
  const menuData = useSelector((state) => state.menu);

  useEffect(() => {
    console.log('ProductList component mounted');
    dispatch(fetchMenuData());
  }, [dispatch]);

  console.log('menuData:', menuData);

  if (menuData.status === 'loading') {
    return <div>Loading...</div>;
  }

  if (menuData.status === 'failed') {
    return <div>Error: {menuData.error}</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
      {menuData.pizzas.length === 0 ? (
        <div>No pizzas available</div>
      ) : (
        menuData.pizzas.map((pizza) => (
          <div key={pizza.name}>
            <h3>{pizza.name}</h3>
            <p>Description: {pizza.description}</p>
            <p>Price: ${pizza.price.toFixed(2)}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;

