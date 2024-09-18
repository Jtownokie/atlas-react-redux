import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [
    { id: "1", title: "To-Do", cards: [] },
  ],
};

export const listSlice = createSlice({
  name: "toDoList",
  initialState,
  reducers: {},
});

export default listSlice.reducer;
