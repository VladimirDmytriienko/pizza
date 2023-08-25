import { Box, Grid, GridItem, Text } from '@chakra-ui/react'; 
import useUserData from './useUserData';
import { returnDate } from './utils/dateUtils';

const UserProfile = ({ userEmail }) => {
  const userData = useUserData(userEmail);

  return (
    <Box p="4">
      {userData ? (
        <Box>
          <Text fontSize="xl">Hello: {userEmail}!</Text>
          <Text fontSize="2xl" mt="4">
            Your orders
          </Text>
          {userData.orders && userData.orders.length > 0 ? (
            <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap="4" mt="4">
              {userData.orders.map((order, index) => (
                <GridItem key={index} borderWidth="1px" p="4" borderRadius="md">
                  <Text fontSize="md" fontWeight="bold" mb="2">
                    Order date: {returnDate(order.id)}
                  </Text>
                  {order.order.map((item, itemIndex) => (
                    <Text key={itemIndex}>
                      {item.name} {item.quantity}
                    </Text>
                  ))}
                  <Text mt="2">Amount: {order.total}</Text>
                </GridItem>
              ))}
            </Grid>
          ) : (
            <Text>No orders found.</Text>
          )}
        </Box>
      ) : (
        <Text>Loading user data...</Text>
      )}
    </Box>
  );
};

export default UserProfile;