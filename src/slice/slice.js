import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getRobot = createAsyncThunk(
  "getRobot",
  async (payload, { rejectWithValue }) => {
    let result = null;
    try {
      result = axios.post("/api/v1", {
        cmd: "getRobot",
      });
    } catch (err) {
      result = rejectWithValue(err.message);
    }
    return result;
  }
);

export const getRobotSlice = createSlice({
  name: "robot",
  initialState: {
    loading: false,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [getRobot.pending]: (state, { payload }) => {
      return {
        ...state,
        loading: true,
      };
    },
    [getRobot.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        loading: false,
        data: payload.data,
      };
    },
    [getRobot.rejected]: (state, { payload }) => {
      return {
        ...state,
        loading: false,
      };
    },
  },
});

export default getRobotSlice.reducer;
