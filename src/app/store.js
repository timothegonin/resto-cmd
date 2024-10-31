import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { cartSlice } from "../features/cart/cartSlice";
import { ownerSlice } from "../features/owner/ownerSlice";
import { notesSlice } from "../features/notes/notesSlice";
import {menuSlice} from '../features/menu/menuSlice'
import {thunk} from 'redux-thunk'
import { api } from "../services/api.service";


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
      menu: menuSlice.reducer,
      [api.reducerPath]: api.reducer,
    }),
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware).concat(thunk),
})