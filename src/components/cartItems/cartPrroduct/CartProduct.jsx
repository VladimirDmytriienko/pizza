import './CartProduct.css'
import { increaseQuantity, decreaseQuantity, addToCart } from '../../../features/cartSlice'
import { useDispatch } from 'react-redux'

const CartProduct = ({item}) => {
  const dispatch = useDispatch()

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      dispatch(decreaseQuantity(item));
    }
  };
  return (
    <div className="cart-product">
      <p>{item.name}</p>
      <p>{item.price}</p>

      <button onClick={() => dispatch(increaseQuantity(item))}> + </button>
      <button onClick={handleDecreaseQuantity} disabled={item.quantity === 1}> - </button>

      <p>{item.quantity}</p>

      <div onClick={() => dispatch(addToCart(item))}>🗑️</div>
    </div>
  )
}

export default CartProduct