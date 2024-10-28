import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { cartSlice } from "../features/cart/cartSlice";
import { ownerSlice } from "../features/owner/ownerSlice";
import { notesSlice } from "../features/notes/notesSlice";
import {thunk} from 'redux-thunk'


let state = {
  value: null,
  list: []
};

export const store = configureStore({
    preloadedState: state,
    reducer: combineReducers({
      owner: ownerSlice.reducer,
      list: cartSlice.reducer,
      notes: notesSlice.reducer,
    }),
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().prepend([
    (store) => (next) => (action) => {
      console.log('Action', action);
      next(action);
    },
    thunk,
  ])
})