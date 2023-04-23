import classes from './CartButton.module.css';
import { ShowCartAction } from '../Store/ShowCart';
import { useDispatch, useSelector } from 'react-redux';
const CartButton = (props) => {
  const dispatch=useDispatch()
function onShowCart(){
  dispatch(ShowCartAction.showCart())
}
const totalQuantity=useSelector(state=>state.cart.totalQuantity)
  return (
    <button className={classes.button} onClick={onShowCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
