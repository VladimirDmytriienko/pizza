import { useDispatch, useSelector } from 'react-redux'
import './productCart.css'
import { addToCart } from '../../features/cartSlice'



const ProductCart = ({item}) => {
  const cart = useSelector((state) => state.cart.value)
  
  const dispatch = useDispatch()
  
  const isExist = cart.some(i => i.name === item.name )
  return (
    <div className='product-cart'>
      <div>{item.name}</div>
      <div>{item.price}</div>

      <button onClick={() => dispatch(addToCart(item))}>
        {isExist ? 'Remove from' : 'Add to'} cart
      </button>
    </div>
  )
}

export default ProductCart