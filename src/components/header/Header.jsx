import { useSelector } from 'react-redux'
import '../header/header.css'

const Header = () => {
const cart = useSelector((state) => state.cart.value)
// console.log(cart.length);
// console.log(cart);
  return (
    <div className="header">
      <div>{cart.length}</div>  
        Header
    </div>
  )
}

export default Header