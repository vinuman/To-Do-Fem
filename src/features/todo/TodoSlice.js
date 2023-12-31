import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("todos");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const initialState = loadState() || [
  { id: 1, title: "Jog around park 3x", active: true },
  { id: 2, title: "Complete JavaScript", active: false },
  { id: 3, title: "10 minutes meditation", active: true },
  { id: 4, title: "Read for 1 hour", active: true },
  { id: 5, title: "Pick up groceries", active: true },
  {
    id: 6,
    title: "Complete Todo App",
    active: true,
  },
];

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
    toggleTodoActive: (state, action) => {
      const todo = state.find((item) => item.id === action.payload);
      if (todo) {
        todo.active = !todo.active;
      }
    },
    deleteInactive: (state) => {
      return state.filter((todo) => todo.active);
    },
  },
});

export const selectAllTodo = (state) => state.todo;

export const { addTodo, toggleTodoActive, deleteInactive } = TodoSlice.actions;

export default TodoSlice.reducer;
