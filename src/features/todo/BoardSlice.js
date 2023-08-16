import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const BoardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setBoard: (state, action) => {
      return action.payload;
    },
  },
});

export const selectedBoard = (state) => state.board;

export const { setBoard } = BoardSlice.actions;

export default BoardSlice.reducer;
