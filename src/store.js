import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
//작은 스토어
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,

    //여기까지가 counterSlice에 있는 reducers
  },
});

export default store;
