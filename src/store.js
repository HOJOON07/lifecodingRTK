import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import { getRobotSlice } from "./slice/slice";
//작은 스토어
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    robot: getRobotSlice,
    //여기까지가 counterSlice에 있는 reducers
  },
});

export default store;
