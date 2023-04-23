import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartAction } from '../Store/CartSlice';
import { useDispatch } from 'react-redux';

const ProductItem = (props) => {
  const { title, price, description } = props;

 const dispatch= useDispatch()

 function onCartHandler(){
  const id=title+ description
  dispatch(cartAction.addCart({id:id, title:title,price:price,description:description,}))
 }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={onCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
