import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
function App() {
  const show=useSelector(state=>state.showcart.isShowCart)
  const cart=useSelector(state=>state.cart)
  console.log("cart",cart);
  useEffect(()=>{
    fetch('https://redux-request-a7cc4-default-rtdb.firebaseio.com/cart.json',{
      method: 'PUT',
      body:JSON.stringify(cart),
      headers:{
        'Content-Type':'application/josn'
      }
    })
  },[cart])
  return (
    <Layout>
      {show && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
