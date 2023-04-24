import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartAction } from '../Store/CartSlice';
const CartItem = (props) => {
const disptch=useDispatch();
  const { id,title,description, quantity, total, price } = props.item;


function onDecrimentHandler(){

  disptch(cartAction.removedCart({id:id}))
}
function onIncrementHandler(){
  disptch(cartAction.addCart({id:id, title:title,price:price,description:description,quantity:quantity}))
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
          <button onClick={onIncrementHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
