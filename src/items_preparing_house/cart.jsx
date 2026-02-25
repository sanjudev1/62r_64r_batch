

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  recipes:[]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state,a) => {
       let is_existing= state.recipes.find(e=>e.id==a.payload.id)
       if(is_existing){
        state.recipes.map(e=>{
          if(e.id==is_existing.id){
            e.quantity+=1
          }
        })
       }else{
        state.recipes.push({...a.payload,quantity:1})
       }
       
    },
    decrement: (state,a) => {
     let is_existing= state.recipes.find(e=>e.id==a.payload.id)
       if(is_existing){
        state.recipes.map((e,index)=>{
          if(e.id==is_existing.id){
            if(e.quantity==1){
              state.recipes.splice(index,1)
            }else{

              e.quantity-=1
            }

          }
        })
       }
    },
   
  },
})


export const { increment, decrement } = cartSlice.actions

export default cartSlice.reducer