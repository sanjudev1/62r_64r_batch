import { configureStore } from '@reduxjs/toolkit'
import { mahaRuchuluSlice } from '../items_preparing_house/tenthous_items'
import { cartSlice } from '../items_preparing_house/cart'

export const kukkatpallystore = configureStore({
  reducer: {
    pullamma:mahaRuchuluSlice.reducer,
    cartproducts:cartSlice.reducer
  },
})