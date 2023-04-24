import { createSlice } from "@reduxjs/toolkit";
const initialStateCart={
    isShowCart:false,
    notification:null
}
const ShowCartSlice=createSlice({
    name:'showcart',
    initialState:initialStateCart,
    reducers:{
        showCart(state){
            state.isShowCart= !state.isShowCart;
        },
        showNotification(state,action){
            state.notification={
                status:action.payload.status,
                title:action.payload.title,
                message:action.payload.message
            }
        }

    }
})
export const ShowCartAction=ShowCartSlice.actions
export default ShowCartSlice.reducer