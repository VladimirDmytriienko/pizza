import { useSelector } from "react-redux";
import UserProfile from "../../firebase/UserProfile";


const UserOrders = () => {
  const userData = useSelector((state) => state.user.currentUser);
  
    return (
      <div>
         <UserProfile userEmail={userData}/>
      </div>
    );
  };

export default UserOrders