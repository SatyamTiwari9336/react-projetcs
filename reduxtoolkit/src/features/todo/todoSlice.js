import { creatSlice, nanoid } from "reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world " }],
};

// function sayhello() {
//   console.log("say hello");
// }
export const todoSlice = creatSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todo.push(todo);
    },
    removetodo: (state, action) => {
      state.todo = state.todo.filter((todo) => {
        todo.id !== action.payload;
      });
    },
  },
});

export const { addtodo, removetodo } = todoSlice.action;

export default todoSlice.reducers;
