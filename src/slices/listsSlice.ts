import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  lists: [
    { id: 1, title: "To-Do", cards: [] },
  ],
};

export const listSlice = createSlice({
  name: "toDoList",
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<string>) => {
      state.lists.push({
        id: state.lists[state.lists.length - 1].id + 1,
        title: action.payload,
        cards: [],
      });
    },
    deleteList: (state, action: PayloadAction<number>) => {
      state.lists = state.lists.filter(list => list.id !== action.payload);
    },
  },
});

export default listSlice.reducer;

export const { addList, deleteList } = listSlice.actions;
