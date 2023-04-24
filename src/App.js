import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { ShowCartAction } from "./components/Store/ShowCart";
import Notification from "./components/UI/Notification";
import { cartAction } from "./components/Store/CartSlice";

let initial=true;
function App() {
  const show = useSelector((state) => state.showcart.isShowCart);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const notification = useSelector((state) => state.showcart.notification);
 

// ****************GET API********************==>START HERE<==
useEffect(()=>{
 const GetApi=async ()=>{
    const response=await fetch("https://redux-request-a7cc4-default-rtdb.firebaseio.com/cart.json")
  
    if(response.ok){
      const data=await response.json()
   
      let GetData;
      for (const key in data.items) {
          GetData = data.items[key];
          console.log(GetData);
          dispatch(cartAction.addCart(GetData))
      }
    }
  }
 GetApi();
},[])
// *****************GET API******************==>END HERE<==

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        ShowCartAction.showNotification({
          status: "pending",
          title: "sending...",
          message: "Sending cart data",
        })
      );
      try {
        const response = await fetch(
          "https://redux-request-a7cc4-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
            headers: {
              "Content-Type": "application/josn",
            },
          }
        );

        if (!response.ok) {
          throw new Error("something went wrong");
        }

        dispatch(
          ShowCartAction.showNotification({
            status: "success",
            title: "success!",
            message: "Send cart data Successfully",
          })
        );
      } catch (error) {
        dispatch(
          ShowCartAction.showNotification({
            status: "error",
            title: "Error!",
            message: "Send cart data Failed",
          })
        );
      }
    };
    if(initial){
      initial=false
      return
    }
    sendCartData();
  }, [cart, dispatch]);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {show && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
