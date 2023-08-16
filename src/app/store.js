import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../features/todo/TodoSlice";
import BoardReducer from "../features/todo/BoardSlice";
import DarkReducer from "../features/darkmode/DarkSlice";

const store = configureStore({
  reducer: {
    todo: TodoReducer,
    board: BoardReducer,
    dark: DarkReducer,
  },
});

export default store;
