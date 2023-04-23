import { createSlice } from "@reduxjs/toolkit";
const initialStateCart = {
  items: [],
};
const CartSlice = createSlice({
  name: "cart",
  initialState: initialStateCart,
  reducers: {
    addCart(state, actions) {
      
       const existingitem=state.items.find(item=>item.id === actions.payload.id) 
        if(!existingitem){
      state.items.push({
        id: actions.payload.id,
        title:actions.payload.title,
        description:actions.payload.description,
        price: actions.payload.price,
        quantity: 1,
      
      });
      console.log(state.items);
    }
    else{
        existingitem.quantity++

    }
    
    },
  },
});
export const cartAction = CartSlice.actions;
export default CartSlice.reducer;
