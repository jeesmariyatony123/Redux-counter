import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

//step1: to create store
const counterStore = configureStore({
    reducer: {
        counterReducer: counterSlice

    }
})

export default counterStore