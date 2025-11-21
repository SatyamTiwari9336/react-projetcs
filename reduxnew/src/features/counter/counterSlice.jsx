import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  //initial state
  name: "counter",
  initialState,
  reducers: {
    //reducer functions listed
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    Reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, Reset } =
  counterSlice.actions;

export default counterSlice.reducer;
