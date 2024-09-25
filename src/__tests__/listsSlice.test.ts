import { test, expect } from "vitest";
import reducer, {
  addList,
  deleteList,
  clearLists,
  addCardToList,
  removeCardFromList,
} from "../slices/listsSlice";

test("Should return initial state", () => {
  expect(reducer(undefined, { type: "unknown" })).toEqual({
    lists: [{ id: 1, title: "To-Do", cards: [1, 2] }],
  });
});

test("Should handle a list being added", () => {
  const previousState = { lists: [] };

  expect(reducer(previousState, addList("test"))).toEqual({
    lists: [{ id: 1, title: "test", cards: [] }],
  });
});

test("Should handle a list being deleted", () => {
  const previousState = { lists: [{ id: 1, title: "test", cards: [] }] };

  expect(reducer(previousState, deleteList(1))).toEqual({
    lists: [],
  });
});

test("Should handle a lists being cleared", () => {
  const previousState = {
    lists: [
      { id: 1, title: "test", cards: [] },
      { id: 2, title: "test 2", cards: [] },
    ],
  };

  expect(reducer(previousState, clearLists())).toEqual({
    lists: [],
  });
});

test("Should handle a card being added to a list", () => {
  const previousState = {
    lists: [
      { id: 1, title: "test", cards: [1, 2] },
      { id: 2, title: "test 2", cards: [3] },
    ],
  };

  expect(reducer(previousState, addCardToList({listId: 2, newCardId: 4}))).toEqual({
    lists: [
      { id: 1, title: "test", cards: [1, 2] },
      { id: 2, title: "test 2", cards: [3, 4] },
    ],
  });
});

test("Should handle a card being removed from a list", () => {
  const previousState = {
    lists: [
      { id: 1, title: "test", cards: [1, 2] },
      { id: 2, title: "test 2", cards: [3, 4] },
    ],
  };

  expect(reducer(previousState, removeCardFromList({listId: 1, cardId: 2}))).toEqual({
    lists: [
      { id: 1, title: "test", cards: [1] },
      { id: 2, title: "test 2", cards: [3, 4] },
    ],
  });
});
