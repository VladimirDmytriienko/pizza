import { useSelector } from "react-redux";
import UserProfile from "../../firebase/UserProfile";
import { Heading } from "@chakra-ui/react";


const UserOrders = () => {
  const userData = useSelector((state) => state.user.currentUser);
    console.log(userData);
    return (
      <div>
        {
          userData ?  <UserProfile userEmail={userData}/>  :   <Heading as='h3' p='1rem' size='lg'> Please login or sign up </Heading>
        }
      </div>
    );
  };

export default UserOrders