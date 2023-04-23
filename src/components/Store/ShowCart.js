import { createSlice } from "@reduxjs/toolkit";
const initialStateCart={
    isShowCart:false
}
const ShowCartSlice=createSlice({
    name:'showcart',
    initialState:initialStateCart,
    reducers:{
        showCart(state){
            state.isShowCart= !state.isShowCart;
        }
    }
})
export const ShowCartAction=ShowCartSlice.actions
export default ShowCartSlice.reducer