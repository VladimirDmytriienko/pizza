import { useSelector } from 'react-redux'
import { Link, NavLink } from "react-router-dom"
import '../header/header.css'
import { Auth } from '../../firebase/auth'
import { BsCart4 } from 'react-icons/bs';
import pizzaLogo from '../../assets/img/pizzaLogo.webp';
const Header = () => {
  
  const cart = useSelector((state) => state.cart.value)
  
  return (
    <header className="header">
      <div className='header-logo'>
        <Link to="/"> <img src={pizzaLogo} alt="pizza-logo" className='pizza-logo' />  <h3 className='pizza-text'>Pizza app</h3>  </Link>
      </div>

      <div className='header-links'>
        <NavLink to="/"  id='nav-link'>  Home</NavLink>
        <NavLink to="/cart"  id='nav-link'> Cart</NavLink>
        <NavLink to="/orders"  id='nav-link'>Orders</NavLink>
      </div>
      <div className='header-assets'>
        <Link to="/orders"><div className='header-indicator'><BsCart4 size={24} color="#333"/> {cart.length} </div></Link>
        
        <Auth className="auth"/>
      </div>

    </header>
  )
}

export default Header