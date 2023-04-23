import { createSlice } from "@reduxjs/toolkit";
const initialStateCart = {
  items: [],
  totalQuantity:0
};
const CartSlice = createSlice({
  name: "cart",
  initialState: initialStateCart,
  reducers: {
    addCart(state, action) {
      
       const existingitem=state.items.find(item=>item.id === action.payload.id) 
       
       state.totalQuantity++;
        if(!existingitem){
      state.items.push({
        id: action.payload.id,
        title:action.payload.title,
        description:action.payload.description,
        price: action.payload.price,
        quantity: 1,
      totalPrice:action.payload.price
      });
      console.log(state.items);
    }
    else{
        existingitem.quantity++
        existingitem.totalPrice+=action.payload.price
    }
    
    },
    removedCart(state,action){
        const existingitem=state.items.find(item=>item.id === action.payload.id)
        state.totalQuantity--;
        // console.log("removed====>",existingitem);
        if(existingitem.quantity===1){
            state.items=state.items.filter(item=>item.id !== action.payload.id)
        }else{
            existingitem.quantity--;
            existingitem.totalPrice -=action.payload.price
        }
    }
  },
});
export const cartAction = CartSlice.actions;
export default CartSlice.reducer;
