import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
  cards: [
    { id: 1, title: "Title", description: "Description" },
    { id: 2, title: "Title", description: "Description" },
  ],
};

export const cardSlice = createSlice({
  name: "cardsList",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<{id: number, title: string, description: string}>) => {
      state.cards.push(action.payload);
    },
    deleteCard: (state, action: PayloadAction<number>) => {
      state.cards = state.cards.filter(card => card.id !== action.payload);
    },
    clearCards: (state) => {
      state.cards = [];
    },
  },
});

export default cardSlice.reducer;

export const { addCard, deleteCard, clearCards } = cardSlice.actions;
