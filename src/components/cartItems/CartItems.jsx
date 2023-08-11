import { useSelector } from "react-redux"
import CartProduct from "./cartPrroduct/CartProduct";
import AddOrderForm from "../../firebase/AddOrderForm";



const CartItems = () => {
  const cart = useSelector(state => state.cart.value);

    return (
        <div>
            CartItems
            {cart.map((i) =>( <CartProduct key={i.name} item={i}/>))}

            <h3 > Subtotal: {cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2)}</h3>
        
            <AddOrderForm userEmail={"pizza@pizza.com"}/>
        </div>
    )
}

export default CartItems