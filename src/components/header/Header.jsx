import { useSelector } from 'react-redux'
import { NavLink } from "react-router-dom"
import '../header/header.css'
import { Auth } from '../../firebase/auth'
import { BsCart4 } from 'react-icons/bs';
const Header = () => {
  const cart = useSelector((state) => state.cart.value)
  // console.log(cart.length);
  // console.log(cart);
  return (
    <header className="header">
      <NavLink to="/"  id='nav-link'>Home</NavLink>
      <NavLink to="/cart"  id='nav-link'>Cart</NavLink>
      <NavLink to="/orders"  id='nav-link'>Orders</NavLink>
      <div><BsCart4 size={24} color="#333"/> {cart.length} </div>
      <Auth/>
    </header>
  )
}

export default Header