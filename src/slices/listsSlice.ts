import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  lists: [
    { id: 1, title: "To-Do", cards: [1, 2] },
  ],
};

export const listSlice = createSlice({
  name: "toDoList",
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<string>) => {
      state.lists.push({
        id: state.lists.length < 1 ? 1 : state.lists[state.lists.length - 1].id + 1,
        title: action.payload,
        cards: [],
      });
    },
    deleteList: (state, action: PayloadAction<number>) => {
      state.lists = state.lists.filter(list => list.id !== action.payload);
    },
    clearLists: (state) => {
      state.lists = [];
    },
    updateList: (state, action: PayloadAction<{listId: number, newCardId: number}>) => {
      state.lists.map((list) => {
        if (list.id === action.payload.listId) {
          list.cards.push(action.payload.newCardId);
        }
      });
    },
  },
});

export default listSlice.reducer;

export const { addList, deleteList, clearLists, updateList } = listSlice.actions;
