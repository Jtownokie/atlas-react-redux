import { test, expect } from "vitest";
import reducer, { addCard, deleteCard, clearCards } from "../slices/cardsSlice";

test("Should return initial state", () => {
  expect(reducer(undefined, { type: "unknown" })).toEqual({
    cards: [
      { id: 1, title: "Title", description: "Description" },
      { id: 2, title: "Title", description: "Description" }
    ],
  });
});

test("Should handle a card being added", () => {
  const previousState = { cards: [] };

  expect(reducer(previousState, addCard({ id: 1, title: "test", description: "test" }))).toEqual({
    cards: [{ id: 1, title: "test", description: "test" }],
  });
});

test("Should handle a card being deleted", () => {
  const previousState = { cards: [{ id: 1, title: "test", description: "test" }] };

  expect(reducer(previousState, deleteCard(1))).toEqual({
    cards: [],
  });
});

test("Should handle cards being cleared", () => {
  const previousState = {
    cards: [
      { id: 1, title: "test", description: "test" },
      { id: 2, title: "test 2", description: "test" },
    ],
  };

  expect(reducer(previousState, clearCards())).toEqual({
    cards: [],
  });
});
