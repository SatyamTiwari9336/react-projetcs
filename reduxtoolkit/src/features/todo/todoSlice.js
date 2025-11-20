import { creatSlice, nanoid } from "reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world " }],
};

export const todoSlice = creatSlice({});
