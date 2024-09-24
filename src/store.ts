import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import toDoListReducer from "./slices/listsSlice";
import cardsListReducer from "./slices/cardsSlice";

const persistedToDoList = persistReducer(
  { key: "toDoList", storage },
  toDoListReducer
);

const persistedCardsList = persistReducer(
  { key: "cardsList", storage },
  cardsListReducer
);

export const store = configureStore({
  reducer: {
    toDoList: persistedToDoList,
    cardsList: persistedCardsList
  },
});

export const persistor = persistStore(store);

// These types are helpful for the typescript autocomplete
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//Add types to dispatch and selector hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
