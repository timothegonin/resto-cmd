import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'list',
  initialState: {}, // le state par défaut de notre slice
  reducers: {
    addProduct: (currentState, action) => {
      const listWithNewProduct = [...currentState, action.payload]
      return listWithNewProduct
    },
    removeProduct: (currentState, action) => {
      const list = [...currentState.list].filter(
        (item, index) => index !== action.payload
      )
      return list
    },
    applyVoucher: (currentState, action) => {
      const withVoucherList = currentState.map(
      item => item.title === 'Super Crémeux' ? ({...item, price: action.payload.price}) : item
      )
      return withVoucherList
    },
  }
})