import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      console.log(action);
      state.value = state.value + action.payload;
    }, //타입을 up으로
  },
});

export default counterSlice;
export const { up } = counterSlice.actions;
