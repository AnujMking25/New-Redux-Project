import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ShowCart from "./ShowCart";
const store=configureStore(
    {reducer:{showcart:ShowCart,cart:CartSlice}})

    export default store