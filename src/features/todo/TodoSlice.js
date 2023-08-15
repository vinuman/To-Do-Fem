import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Jog around park 3x", active: true },
  { id: 2, title: "Complete online JavaScript course", active: false },
  { id: 3, title: "10 minutes meditation", active: true },
  { id: 4, title: "Read for 1 hour", active: true },
  { id: 5, title: "Pick up groceries", active: true },
  { id: 5, title: "Complete Todo App on Frontend Mentor", active: true },
];

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title) {
        return {
          payload: {
            id: nanoid(),
            title,
            active: true,
          },
        };
      },
    },
  },
});

export const selectAllTodo = (state) => state.todo;

export const { addTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
