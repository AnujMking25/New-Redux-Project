import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const Ritem=useSelector(state=>state.cart.items)
  console.log("useSelector in cart",Ritem[0]);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      
      <ul>
      {Ritem.map(item=>( <CartItem key={item.id}
          item={{id:item.id, title:item.title, quantity: item.quantity, total: item.totalPrice, price: item.price }}
        />))}
      </ul>
    </Card>
  );
};

export default Cart;
