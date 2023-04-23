import classes from './CartButton.module.css';
import { ShowCartAction } from '../Store/ShowCart';
import { useDispatch } from 'react-redux';
const CartButton = (props) => {
  const dispatch=useDispatch()
function onShowCart(){
  dispatch(ShowCartAction.showCart())
}
  return (
    <button className={classes.button} onClick={onShowCart}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
