import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "./eventSlice";

const store = configureStore({
    reducer:{
        event: eventSlice.reducer
    }
})
export default store