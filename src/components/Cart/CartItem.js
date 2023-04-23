import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartAction } from '../Store/CartSlice';
const CartItem = (props) => {
const disptch=useDispatch();
  const { id,title, quantity, total, price } = props.item;


function onDecrimentHandler(){
  console.log("id==>==>",id);
  disptch(cartAction.removedCart(id))
}
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total}{' '}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onDecrimentHandler}>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
